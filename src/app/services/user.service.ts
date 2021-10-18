import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from '../clases/paciente';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged : any = false;
  //Pacientes
  pacientes : Observable<Paciente[]>;
  pacienteCollection : AngularFirestoreCollection<Paciente>;

  constructor(private auth : AngularFireAuth, private router : Router, private firestore : AngularFirestore) { 
    auth.authState.subscribe((user) => (this.logged= user));

    this.pacienteCollection = firestore.collection<Paciente>('pacientes');
    this.pacientes = this.pacienteCollection.valueChanges({idField: 'id'});

  }

  Login(email : string , password : string){
    
    
    return this.auth.signInWithEmailAndPassword(email, password);

  }

  RegistrarPaciente(paciente : Paciente){
    return this.pacienteCollection.add({...paciente});
  }
}
