import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Especialista } from '../clases/especialista';
import { Paciente } from '../clases/paciente';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private storage : AngularFireStorage, private userService  : UserService) { }


  async SubirFotoEspecialista(formData : FormData, especialista : Especialista){

    const nombre = "foto-" + Date.now();
    const filePath = nombre;
    const task = await this.storage.upload(filePath, formData.get('foto'));

    const ref = this.storage.ref(filePath);
     ref.getDownloadURL()
     .subscribe((data)=>{
      especialista.foto = data;
      console.log(data);
      console.log(especialista);
      this.userService.RegistrarEspecialista(especialista);
     });
  }

  async SubirFotoPaciente(formData : FormData, paciente : Paciente){

    const nombre = "foto-" + Date.now();
    const filePath = nombre;
    const task = await this.storage.upload(filePath, formData.get('foto'));

    const ref = this.storage.ref(filePath);
     ref.getDownloadURL()
     .subscribe((data)=>{
      paciente.fotos = data;
      console.log(data);
      console.log(paciente);
      this.userService.RegistrarPaciente(paciente);
     });
  }
}
