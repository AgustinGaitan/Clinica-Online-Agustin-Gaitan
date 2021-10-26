import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-especialistas-func',
  templateUrl: './listado-especialistas-func.component.html',
  styleUrls: ['./listado-especialistas-func.component.scss']
})
export class ListadoEspecialistasFuncComponent implements OnInit {
  
  arrayFiltrado : any;
  @Output() especialistaSeleccionadoEmitter : EventEmitter<any> = new EventEmitter();
  @Input() set especialidadAMostrar(value : any){

    console.log(value);
    this.arrayFiltrado = this.userService.todosLosEspecialistas.filter
    ((especialista : any) =>{ 
      for(let item of especialista.especialidad){
        if(value == item){

          return item;
        }
      }
    });


  };
 
  constructor(public userService : UserService) {

    
    console.log(this.especialidadAMostrar);
   
      
  }

  ngOnInit(): void {
  }

  SeleccionarEspecialista(especialista : any){
    this.especialistaSeleccionadoEmitter.emit(especialista);
  }
}
