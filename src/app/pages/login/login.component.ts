import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email : string = "";
  password : string = "";
  loading : boolean = false;
  

  constructor(private userSevice : UserService, private router : Router) { }

  ngOnInit(): void {
  }


  Loguearse(){
    this.loading = true;
    
    setTimeout(() => {
     
      this.userSevice.Login(this.email, this.password);
      this.loading = false;
    }, 2000);
    
  }

  LoguearsePaciente(){
    this.email="paciente@paciente.com";
    this.password="123123";
   
      this.Loguearse();
  
  }

  LoguearseEspecialista(){

    this.email="especialista@especialista.com";
    this.password="12312";
 
      this.Loguearse();
  
    
  }

  LoguearseAdministrador(){
    this.email="administrador@administrador.com";
    this.password="123123";
    
      this.Loguearse();
   
  }
}
