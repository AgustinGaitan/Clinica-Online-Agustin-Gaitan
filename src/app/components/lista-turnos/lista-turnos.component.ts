import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.scss']
})
export class ListaTurnosComponent implements OnInit {

  @Output() turnoClickeadoEmitter : EventEmitter<any> = new EventEmitter();
  turnos : any[] = [];

  @Input() set filtro(value : any){
    this.turnos = [];
    if(value.tipo=="especialidad"){
     
      for(let turno of this.userService.todosLosTurnos){
        if(turno.especialidad == value.item){
          this.turnos.push(turno);
        }
      }
    }else{
      
        
        for(let turno of this.userService.todosLosTurnos){

          if(turno.especialista == value.item){
     
            this.turnos.push(turno);
          }
        }
       
    }
  }
  
  constructor(private userService : UserService) {

    this.userService.turnos
    .subscribe((data)=>{
      this.turnos = data;
    });
  }

  ngOnInit(): void {
  }

  SeleccionarTurno(turno : any){
    this.turnoClickeadoEmitter.emit(turno);
  }

}
