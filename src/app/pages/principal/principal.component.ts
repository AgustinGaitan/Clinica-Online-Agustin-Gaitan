import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(public userService : UserService) { 
    console.log(this.userService.usuarioActual);
    //if(this.userService.usuarioActual.)
  }

  ngOnInit(): void {
  }

}
