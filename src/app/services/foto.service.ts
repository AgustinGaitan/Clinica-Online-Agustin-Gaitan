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
    const filePath = "especialistas/" + nombre;
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

    let fotoUno = formData.get('foto');
    let fotoDos = formData.get('otraFoto');
    const nombre = "foto-" + Date.now();
    const filePath = "pacientes/" + nombre;
    const filePathOtra = "pacientes/" + nombre + '-2';
    await this.storage.upload(filePath, fotoUno);
    await this.storage.upload(filePathOtra, fotoDos);

    const ref =  this.storage.ref(filePath);
    const refDos = this.storage.ref(filePathOtra);

     ref.getDownloadURL()
     .subscribe((url1 : any)=>{
      paciente.fotos.push(url1)

       refDos.getDownloadURL()
       .subscribe((url2 : any)=>{
         paciente.fotos.push(url2);
       
         console.log(paciente);
        this.userService.RegistrarPaciente(paciente);
       })

     });


  }
}
