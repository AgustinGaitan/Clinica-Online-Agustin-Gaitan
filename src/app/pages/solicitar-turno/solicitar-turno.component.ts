import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  especialidadClickeada : any;
  especialistaClickeado : any;
  mostrarListaEspecialistas : boolean = false;
  horariosMostrar : any[] = [];
  fechasAMostrar : any[] = [];
  posiblesTurnos : any;
  constructor() {
    let fecha = new Date();
    console.log(fecha.getDay());

  }

  ngOnInit(): void {
  }

  MostrarSeleccionado(event : any){
    this.especialidadClickeada = event;
    this.mostrarListaEspecialistas = true;
   // console.log("clickeado ",  event);
  }

  MostrarEspecialistaSeleccionado(event : any){
    this.especialistaClickeado = event;
    this.horariosMostrar = event.horarios;
    let fechaPushear  = new Date().getDate();
    //console.log(event.horarios);
    let hoy = new Date();
    let fecha = new Date();
    for(let i = 0 ; i < 15 ; i++){

      fecha.setDate(hoy.getDate() + 1);
      hoy.setDate(hoy.getDate() + 1);
      this.fechasAMostrar.push(fecha.toUTCString());
    }
    console.log(this.fechasAMostrar);
    // for(let dia of event.horarios){
      


    // }

   
       // this.mostrarListaEspecialistas = true;
  }

  PedirTurno(){

  }
}
