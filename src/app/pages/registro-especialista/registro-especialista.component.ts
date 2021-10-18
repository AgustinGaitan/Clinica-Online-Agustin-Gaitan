import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especialista } from 'src/app/clases/especialista';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.scss']
})
export class RegistroEspecialistaComponent implements OnInit {

  formRegistro !: FormGroup;

  constructor(private fb : FormBuilder, private userService : UserService) {
 
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', Validators.required],
      dni: ['', Validators.required],
      obraSocial: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.email],

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
  getEspecialidad(){
    return this.formRegistro.get('especialidad')?.value;
  }

  Registrarse(){
    let especialista : Especialista = new Especialista(this.getNombre(),
                                            this.getApellido(),
                                            this.getEdad(),
                                            this.getDni(),
                                            this.getEmail(),
                                            this.getPassword(),
                                            this.getEspecialidad()
                                            )

                                            
    this.userService.RegistrarEspecialista(especialista);

  }

}
