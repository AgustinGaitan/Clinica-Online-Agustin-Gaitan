import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/clases/administrador';
import { FotoService } from 'src/app/services/foto.service';
import { UserService } from 'src/app/services/user.service';
import { Workbook } from 'exceljs';
import * as fileSaver from 'file-saver';
const ExcelJS = require('exceljs');

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

  Excel(){

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Usuarios');
    let header = ["Nombre", "Apellido", "DNI", "Edad", "Correo", "Tipo de usuario"];
    let headerRow = sheet.addRow(header);

    let todosLosUsuarios = this.userService.todosLosPacientes.concat(this.userService.todosLosEspecialistas);
    todosLosUsuarios = todosLosUsuarios.map((usuario : any)=>{
        if(usuario?.especialidad){
          usuario.tipo = 'Especialista';
        }else{
          usuario.tipo = 'Paciente';
        }

        return usuario;
    });

    for(let usuario of todosLosUsuarios){
      let fila = [usuario.nombre, usuario.apellido, usuario.dni, usuario.edad, usuario.email, usuario.tipo];

      sheet.addRow(fila);
    }

    let nombre = 'Clinica OnLine - Usuarios';

    workbook.xlsx.writeBuffer().then((data : any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fileSaver.saveAs(blob, nombre + '.xlsx');
    });
  }
}
