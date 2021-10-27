import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  turnosPaciente : any[] = [];
  turnosEspecialista : any[] = [];

  constructor(public userService : UserService) { 
    
    if(this.userService.usuarioActual.tipo == 'paciente'){

      this.turnosPaciente = this.userService.todosLosTurnos.filter((turno)=>{
        if(turno.paciente == this.userService.usuarioActual.dni){
          return turno;
        }
      });
    }else{

      this.turnosEspecialista = this.userService.todosLosTurnos.filter((turno)=>{
        if(turno.especialista == this.userService.usuarioActual.dni){
          return turno;
        }
      });
    }

      

    console.log(this.turnosPaciente);
  }

  ngOnInit(): void {
  }

  CancelarTurno(turno : any){

    this.userService.BorrarTurno(turno).
    then((data)=>{
      let indice = this.turnosPaciente.indexOf(turno); 
      this.turnosPaciente.splice(indice,1); 
      //console.log('Eliminado');
    })
  }

  ModificarTurno(turno : any, accion : string){

    this.userService.ModificarTurno(turno, accion );
    this.RefrescarArrays();
    
  }

  RefrescarArrays(){
    if(this.userService.usuarioActual.tipo == 'paciente'){

      this.turnosPaciente = this.userService.todosLosTurnos.filter((turno)=>{
        if(turno.paciente == this.userService.usuarioActual.dni){
          return turno;
        }
      });
    }else{

      this.turnosEspecialista = this.userService.todosLosTurnos.filter((turno)=>{
        if(turno.especialista == this.userService.usuarioActual.dni){
          return turno;
        }
      });
    }
  }
}
