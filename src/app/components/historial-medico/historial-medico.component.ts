import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.scss']
})
export class HistorialMedicoComponent implements OnInit {

  @Output() cerrarEmitter : EventEmitter<any> = new EventEmitter();
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

    let pacienteRecibido : any;
    let historialTurno : any = {
      altura : this.controles.get('altura')?.value,
      peso: this.controles.get('peso')?.value,
      temperatura: this.controles.get('temperatura')?.value,
      presion: this.controles.get('presion')?.value, 

    };
    
    historialTurno[this.controles.get('datoUnoNom')?.value] = this.controles.get('datoUno')?.value;
    historialTurno[this.controles.get('datoDosNom')?.value] = this.controles.get('datoDos')?.value;
    historialTurno[this.controles.get('datoTresNom')?.value] = this.controles.get('datoTres')?.value;

  
    this.userService.GetHistorialMedico(this.pacienteDelHistorial)
    .subscribe((data : any)=>{

      pacienteRecibido = data;

    });



    Swal.fire({
      title:'Historial medico realizado con exito',
      icon: 'success',
      timer: 2000,
      timerProgressBar : true
    }).then(()=>{
      setTimeout(() => {

        if(pacienteRecibido){
          pacienteRecibido.historialMedico.push(historialTurno);
          this.userService.SubirHistorialClinico(this.turno,this.pacienteDelHistorial,historialTurno, pacienteRecibido.historialMedico);
        }
        
      }, 2000);
      this.cerrarEmitter.emit(false);
    });
   
  }
}
