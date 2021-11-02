import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-todos-usuarios',
  templateUrl: './listado-todos-usuarios.component.html',
  styleUrls: ['./listado-todos-usuarios.component.scss']
})
export class ListadoTodosUsuariosComponent implements OnInit {

  verHistorial : boolean = false;
  pacienteHistorial : any;
  constructor(public userService : UserService) {


  }

  ngOnInit(): void {
  }

  DeshabilitarEspecialista(especialista : Especialista){
    this.userService.DeshabilitarEspecialista(especialista);
  }
  
  HabilitarEspecialista(especialista : Especialista){
    this.userService.HabilitarEspecialista(especialista);
  }

  VerHistorial(paciente : any){

    console.log(paciente);
    if(this.verHistorial){
      this.verHistorial = false;
    }else{
      if(paciente.historialMedico.length == 0){
        Swal.fire({
          title: "Advertencia",
          text: 'Este paciente no tiene historial medico',
          icon: 'warning',
          timer: 2000,
          timerProgressBar : true
        })
      }else{
        this.pacienteHistorial = paciente.historialMedico;
        console.log('paciente historial ', this.pacienteHistorial);
        this.verHistorial = true;
      }

    }
    

  }

}
