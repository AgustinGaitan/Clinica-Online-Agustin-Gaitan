import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listado-todos-usuarios',
  templateUrl: './listado-todos-usuarios.component.html',
  styleUrls: ['./listado-todos-usuarios.component.scss']
})
export class ListadoTodosUsuariosComponent implements OnInit {


  constructor(public userService : UserService) {


  }

  ngOnInit(): void {
  }

  DeshabilitarEspecialista(especialista : Especialista){
    this.userService.DeshabilitarEspecialista(especialista);
  }
  
  HabilitarEspecialista(especialista : Especialista){
    this.userService.HabilitarEspecialista(especialista);
  }

}
