import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userSevice : UserService, private router : Router) { }
  email : string = "";
  password : string = "";
  error : string = "";

  ngOnInit(): void {
  }


  Loguearse(){

    this.userSevice.Login(this.email, this.password)
    .then(() =>{

      console.log('Usuario logueado');
      this.router.navigateByUrl('/bienvenida');
    }).catch((error) =>{
      if(error.code == "auth/user-not-found"){
        this.error = "Usuario no encontrado."
      }else{
        this.error = "Datos incorrectos."
      }
    });
  }
}
