import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  turnosPaciente : any[] = [];
  turnosEspecialista : any[] = [];
  mostrarEncuesta : any;
  comentario : any;
  mostrarCalificar : boolean = false;
  turnoACalificar : any;
  turnoHistorial : any;
  mostrarHistorial : boolean = false;

  turnosFiltradosEsp : any[] = [];
  turnosFiltradosPac : any[] = [];

  filtro : any;
  log : any;

  constructor(public userService : UserService, private router : Router) { 
    
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
          this.userService.ComentarioEspecialista(turno,text) 
          .then(()=>{
            this.turnoHistorial = turno;
            this.mostrarHistorial = true;
          });;
        }else{
          this.userService.ComentarioAdministrador(turno,text);
        }
      }
      this.RefrescarArrays();
    });
    
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

  MostrarEncuesta(){
    this.mostrarEncuesta = true;
  }

  VerComentarioDelEspecialista(turno : any){
    this.comentario = turno.comentarioEspecialista;
  }

  VerComentarioDelPaciente(turno : any){
    if(turno.comentarioPaciente != undefined && turno.comentarioPaciente != ''){

      this.comentario = turno.comentarioPaciente;
    }
    else{
      Swal.fire({
        icon:'warning',
        text: 'No hay comentarios del paciente en este turno',
        title: 'Atención',
        timer: 2000
      });
    }

  }

  CerrarEncuesta(event : any){
    this.mostrarEncuesta = event;
  } 

  MostrarCalificar(turno : any){
    this.mostrarCalificar = true;
    this.turnoACalificar = turno;
  }

  CalificarAtencion(calificacion : any){
    
    this.userService.Calificar(this.turnoACalificar, calificacion)
    .then(()=>{
      Swal.fire({
        icon:'success',
        text: 'Exito al calificar',
        title: 'Atención',
        timer: 2000,
        timerProgressBar: true
      }).then(()=>{

        this.mostrarCalificar = false;
      });
    });
  }

  RecibirOutput(event : any){
    this.mostrarHistorial = event;
  }

  Filtrar(){
   
    this.turnosFiltradosPac = [];
    if(this.userService.usuarioActual.tipo == 'paciente'){

      // this.turnosFiltradosPac = this.turnosPaciente.filter((turnos) =>{

      //   Object.entries(turno).forEach(item => {
      //     //         //console.log(item)
      //     //         for(let atributo in item){
      //     //           if(atributo.toString().includes(this.filtro)){
    
      //     //             this.turnosFiltradosPac.push(turno);
                      
      //     //             console.log(this.turnosFiltradosPac);
      //     //             break;
      //     //           }
      //   });
      // });
    }
   
  }

}



      // for(let turno of this.turnosPaciente){

      //   if(!this.turnosFiltradosPac.includes(turno)){

      //       Object.entries(turno).forEach(item => {
      //         //console.log(item)
      //         for(let atributo in item){
      //           if(atributo.toString().includes(this.filtro)){

      //             this.turnosFiltradosPac.push(turno);
                  
      //             console.log(this.turnosFiltradosPac);
      //             break;
      //           }
                
      //         }
      //       });

      //   }
      // }  