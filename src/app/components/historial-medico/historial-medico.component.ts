import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.scss']
})
export class HistorialMedicoComponent implements OnInit {


  @Input() turno : any;
  pacienteDelHistorial : any;
  controles !: FormGroup
  constructor(private fb : FormBuilder, public userService : UserService) { 
    this.controles = this.fb.group({
      altura:['',Validators.required],
      peso:['',Validators.required],
      temperatura:['',Validators.required],
      presion:['',Validators.required],
      datoUno:['',Validators.required],
      datoUnoNom:['',Validators.required],
      datoDos:['',Validators.required],
      datoDosNom:['',Validators.required],
      datoTres:['',Validators.required],
      datoTresNom:['',Validators.required]
    });
    this.userService.pacientes
    .subscribe((data)=>{
      for(let item of data){
        if(item.dni == this.turno.paciente){
          this.pacienteDelHistorial = item;
          console.log(this.pacienteDelHistorial);
          break;
        }
      }
    });

  }

  ngOnInit(): void {
  }

  EnviarHistorial(){

  }
}
