import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especialista } from 'src/app/clases/especialista';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.scss']
})
export class RegistroEspecialistaComponent implements OnInit {

  formRegistro !: FormGroup;
  especialidadSeleccionada : any;
  formData : FormData = new FormData();

  constructor(private fb : FormBuilder, private userService : UserService, private fotoService : FotoService) {
 
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(20), Validators.max(90)]],
      dni: ['', [Validators.required,Validators.min(1000000), Validators.max(99999999)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      foto:['', Validators.required]

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
                                            this.especialidadSeleccionada
                                            )

                                            
    
    this.fotoService.SubirFotoEspecialista(this.formData,especialista);

  }

  MostrarEspecialidadSeleccionada(event :any){
    this.especialidadSeleccionada = event.nombre;
  }

  SubirFoto(event : any){

    this.formData.append('foto',event.target.files[0]);
    

  }
}
