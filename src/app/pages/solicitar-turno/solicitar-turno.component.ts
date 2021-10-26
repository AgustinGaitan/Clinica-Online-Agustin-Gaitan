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
  constructor() { }

  ngOnInit(): void {
  }

  MostrarSeleccionado(event : any){
    this.especialidadClickeada = event;
    this.mostrarListaEspecialistas = true;
   // console.log("clickeado ",  event);
  }

  MostrarEspecialistaSeleccionado(event : any){
    this.especialistaClickeado = event;
   // this.mostrarListaEspecialistas = true;
  }
}
