import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  turnosPaciente : any[] = [];

  constructor(public userService : UserService) { 
    
    this.turnosPaciente = this.userService.todosLosTurnos.filter((turno)=>{
      if(turno.paciente == this.userService.usuarioActual.dni){
        return turno;
      }
    });

    console.log(this.turnosPaciente);
  }

  ngOnInit(): void {
  }

}
