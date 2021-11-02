import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  mostrarHistorial : boolean = false;
  


  constructor(public userService : UserService) { 
    
    
  }

  ngOnInit(): void {
  }

  MostrarHistorial(){
    this.mostrarHistorial = true;
  }

}
