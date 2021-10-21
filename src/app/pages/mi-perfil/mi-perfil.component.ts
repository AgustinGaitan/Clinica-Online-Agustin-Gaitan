import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista';
import { Paciente } from 'src/app/clases/paciente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

   //paciente : Paciente;
  // especialista : Especialista;


  constructor(private userService : UserService) { 
    for(let item of this.userService.todosLosPacientes){
      if(this.userService.usuarioActual.uid == item.uid){
         //this.paciente = item;
      }
    }
  }

  ngOnInit(): void {
  }

}
