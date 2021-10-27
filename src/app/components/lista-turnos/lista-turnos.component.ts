import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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

  ModificarTurno(turno : any, accion : string){

    this.userService.ModificarTurno(turno, accion )
    .then( async ()=>{
      // Swal.fire({
      //   title: 'Exito',
      //   text: 'Exito al cambiar el estado del turno',
      //   icon : 'success'
      // }).then(()=>{

        
      // });
      if(accion=='finalizado' || accion=='cancelado'){

        const { value: text } = await Swal.fire({
          input: 'textarea',
          title: 'Reseña/Comentario',
          inputPlaceholder: 'Deje su reseña acerca del turno',
          inputAttributes: {
            'aria-label': 'Escriba su reseña o comentario aquí...'
          },
        });
        
        if (this.userService.usuarioActual.tipo=='paciente') {
          this.userService.ComentarioPaciente(turno,text);
        }else if(this.userService.usuarioActual.tipo=='especialista'){
          this.userService.ComentarioEspecialista(turno,text);
        }else{
          this.userService.ComentarioAdministrador(turno,text);
        }
      }
    });
    
  }
}
