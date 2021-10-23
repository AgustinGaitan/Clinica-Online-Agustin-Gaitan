import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  especialidadClickeada : any;
  especialistaClickeado : any;
  constructor() { }

  ngOnInit(): void {
  }

  MostrarSeleccionado(event : any){
    this.especialidadClickeada = event;
    
  }

  MostrarEspecialistaSeleccionado(event : any){
    this.especialistaClickeado = event;
  }
}