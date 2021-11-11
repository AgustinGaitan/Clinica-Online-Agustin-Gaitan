import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinusculasEnLoginPipe } from 'src/app/pipes/minusculas-en-login.pipe';
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
  pacientesDePrueba : any;
  especialistasDePrueba : any;
  administradoresDePrueba : any;
  

  constructor(private userSevice : UserService, private router : Router, private pipe : MinusculasEnLoginPipe) {
    this.userSevice.pacientes
    .subscribe((data)=>{
      this.pacientesDePrueba = data.filter((paciente : any)=>{
        return paciente.prueba == true;
        
      });
      
    });

    this.userSevice.especialistas
    .subscribe((data)=>{
      this.especialistasDePrueba = data.filter((especialista : any)=>{
        return especialista.prueba == true;
        
      });
      
    });

    this.userSevice.administradores
    .subscribe((data)=>{
      this.administradoresDePrueba = data.filter((admin : any)=>{
        return admin.prueba == true;
        
      });
      
    });
  }

  ngOnInit(): void {
  }


  Loguearse(){
    this.loading = true;
    
    setTimeout(() => {
     
      this.userSevice.Login(this.email, this.password);
      this.loading = false;
    }, 2000);
    
  }

  LoguearseUsuario(email : string, password : string){
    this.email= this.pipe.transform(email);
    this.password= password;
   
    this.Loguearse();
  
  }

  LoguearseEspecialista(){

    this.email="especialista@especialista.com";
    this.password="123123";
 
      this.Loguearse();
  
    
  }

  LoguearseAdministrador(){
    this.email="administrador@administrador.com";
    this.password="123123";
    
      this.Loguearse();
   
  }
}
