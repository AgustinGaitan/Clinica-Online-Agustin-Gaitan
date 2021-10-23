import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-especialistas-func',
  templateUrl: './listado-especialistas-func.component.html',
  styleUrls: ['./listado-especialistas-func.component.scss']
})
export class ListadoEspecialistasFuncComponent implements OnInit {

  @Output() especialistaSeleccionadoEmitter : EventEmitter<any> = new EventEmitter();

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }

  SeleccionarEspecialista(especialista : any){
    this.especialistaSeleccionadoEmitter.emit(especialista);
  }
}
