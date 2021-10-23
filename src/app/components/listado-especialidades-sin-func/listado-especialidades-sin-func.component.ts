import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-especialidades-sin-func',
  templateUrl: './listado-especialidades-sin-func.component.html',
  styleUrls: ['./listado-especialidades-sin-func.component.scss']
})
export class ListadoEspecialidadesSinFuncComponent implements OnInit {

 
  @Output() especialidadSeleccionadaEmitter : EventEmitter<any> = new EventEmitter();
  especialidades : any[] = [];
  formEspecialidad !: FormGroup;

  constructor(private userService : UserService, private formBuilder : FormBuilder) { 
    
    this.userService.especialidades
    .subscribe((data : any)=>{
      this.especialidades = data;
    });
  }

  ngOnInit(): void {
  }

  SeleccionarEspecialidad(especialidad : any){
    this.especialidadSeleccionadaEmitter.emit(especialidad);
  }

}
