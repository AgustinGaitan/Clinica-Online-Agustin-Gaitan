import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  usuarioActual : any;
  constructor(public userService : UserService) { 
    
    console.log("logueado", this.userService.logged);
  }

  ngOnInit(): void {

  }

}
