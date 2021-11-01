import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/clases/paciente';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss']
})
export class RegistroPacienteComponent implements OnInit {

   
  formRegistro !: FormGroup;
  formData  : FormData = new FormData();

  constructor(private fb : FormBuilder, private userService : UserService, private fotoService : FotoService) {
 
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      dni: ['', [Validators.required,Validators.min(1000000), Validators.max(99999999)]],
      obraSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fotos:['', Validators.required],
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
  getObraSocial(){
    return this.formRegistro.get('obraSocial')?.value;
  }

  Registrarse(){
    let paciente : Paciente = new Paciente(this.getNombre(),
                                            this.getApellido(),
                                            this.getEdad(),
                                            this.getDni(),
                                            this.getEmail(),
                                            this.getPassword(),
                                            this.getObraSocial()
                                            )

    paciente.historialMedico = [];
                                            
    this.fotoService.SubirFotoPaciente(this.formData,paciente);

  }

  SubirFoto(event : any){

    this.formData.append('foto',event.target.files[0], event.target.files[0].name);
    this.formData.append('otraFoto',event.target.files[1], event.target.files[1].name);
    
  }
}
