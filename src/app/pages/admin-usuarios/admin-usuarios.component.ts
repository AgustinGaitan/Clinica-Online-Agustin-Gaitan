import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/clases/administrador';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

   
  formRegistro !: FormGroup;
  formData  : FormData = new FormData();
  mostrarRegistroAdmin = false;

  constructor(private fb : FormBuilder, private userService : UserService, private fotoService : FotoService) {
 
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', Validators.required],
      dni: ['', Validators.required],
      obraSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      captcha:[false,Validators.requiredTrue]

    })
  }

  ngOnInit(): void {
  }

  getNombre(){
    return this.formRegistro.get('nombre')?.value;
  }
  getApellido(){
    return this.formRegistro.get('apellido')?.value;
  }
  getDni(){
    return this.formRegistro.get('dni')?.value;
  }
  getEmail(){
    return this.formRegistro.get('email')?.value;
  }
  getEdad(){
    return this.formRegistro.get('edad')?.value;
  }
  getPassword(){
    return this.formRegistro.get('password')?.value;
  }

  Registrarse(){
    let administrador : Administrador = new Administrador(this.getNombre(),
                                            this.getApellido(),
                                            this.getEdad(),
                                            this.getDni(),
                                            this.getEmail(),
                                            this.getPassword(),
                                            )

                                            
    this.fotoService.SubirFotoAdministrador(this.formData,administrador);

  }

  SubirFoto(event : any){

    this.formData.append('foto',event.target.files[0], event.target.files[0].name);
    
  }

  RegistrarAdmin(){
    this.mostrarRegistroAdmin = true;
  }
}
