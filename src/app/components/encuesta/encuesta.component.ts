import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  controles !: FormGroup;
  @Output() cerrarEmitter : EventEmitter<any> = new EventEmitter();
  constructor(private fb : FormBuilder, private userService : UserService) {

    this.controles = this.fb.group({
      comodidad: ['', Validators.required],
      atencion: ['normal',Validators.required],
      volveria: ['',Validators.required]
    });

  }

  ngOnInit(): void {
  }

  MandarEncuesta(){
    let comodidadFinal : string;
    let volveriaParam : boolean = true;
    if(this.controles.get('comodidad')?.value == 50){
      comodidadFinal = "Media";
    } else if(this.controles.get('comodidad')?.value < 50){
      comodidadFinal = "Baja";
    }else{
      comodidadFinal = "Alta";
    }

    if(this.controles.get('volveria')?.value == ""){
      volveriaParam = false;
    }
    let encuesta = {
      comodidad : comodidadFinal,
      atencion : this.controles.get('atencion')?.value,
      volveria: volveriaParam
    }

    this.userService.SubirEncuesta(encuesta)
    .then(()=>{
      Swal.fire({
        title: 'Encuesta creada',
        text: 'La encuesta se creó con exito',
        icon : 'success',
        timer: 2000
      }).then(()=>{
        this.cerrarEmitter.emit(false);
      });
    })
  }
}
