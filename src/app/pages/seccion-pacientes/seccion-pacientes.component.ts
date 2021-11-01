import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seccion-pacientes',
  templateUrl: './seccion-pacientes.component.html',
  styleUrls: ['./seccion-pacientes.component.scss']
})
export class SeccionPacientesComponent implements OnInit {

  turnosMostrar : any[] = [];
  pacientesMostrar : any[] = [];
  historialMedico : any;

  constructor(public userService : UserService) {

    this.userService.turnos.subscribe((data)=>{
      for(let turno of data){
        if(turno.especialista == this.userService.usuarioActual.dni && turno.estado == 'finalizado'){
          console.log(turno);
          setTimeout(() => {
                      
              for(let paciente of this.userService.todosLosPacientes){
                if(turno.paciente == paciente.dni && !this.pacientesMostrar.includes(paciente)){
                  this.pacientesMostrar.push(paciente);
                  console.log("pacientes a mostrar " ,this.pacientesMostrar);
                }
              }
            
          }, 1000);
        }
      }
    });

  }


  ngOnInit(): void {
  }


  VerHistorial(paciente : any){
    console.log(paciente);
    this.historialMedico = paciente.historialMedico;
  }
}
