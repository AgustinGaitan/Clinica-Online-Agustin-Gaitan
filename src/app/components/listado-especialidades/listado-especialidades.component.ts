
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-listado-especialidades',
  templateUrl: './listado-especialidades.component.html',
  styleUrls: ['./listado-especialidades.component.scss']
})
export class ListadoEspecialidadesComponent implements OnInit {

  @Output() especialidadSeleccionadaEmitter : EventEmitter<any> = new EventEmitter();
  especialidades : any[] = [];
  formEspecialidad !: FormGroup;

  constructor(private userService : UserService, private formBuilder : FormBuilder) { 
    
    this.userService.especialidades
    .subscribe((data : any)=>{
      this.especialidades = data;
    });

    this.formEspecialidad = formBuilder.group({

      especialidad:['',Validators.required]

    });
  }

  ngOnInit(): void {
  }

  SeleccionarEspecialidad(especialidad : any){
    this.especialidadSeleccionadaEmitter.emit(especialidad);
  }


  AgregarEspecialidad(){
    
    this.userService.AgregarEspecialidad(this.formEspecialidad.get('especialidad')?.value);
  }

}
