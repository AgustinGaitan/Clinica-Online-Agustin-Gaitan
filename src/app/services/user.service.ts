import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Especialista } from '../clases/especialista';
import { Paciente } from '../clases/paciente';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged : any = false;
  //Pacientes
  pacientes : Observable<Paciente[]>;
  pacienteCollection : AngularFirestoreCollection<Paciente>;
  //Especialista
  especialistas : Observable<Especialista[]>;
  especialistaCollection : AngularFirestoreCollection<Especialista>;
  //Especialidades
  especialidades : Observable<any[]>;
  especialidadesCollection : AngularFirestoreCollection<any>;

  constructor(private auth : AngularFireAuth, private router : Router, private firestore : AngularFirestore) { 
    auth.authState.subscribe((user) => (this.logged= user));

    this.pacienteCollection = firestore.collection<Paciente>('pacientes');
    this.pacientes = this.pacienteCollection.valueChanges({idField: 'id'});

    this.especialistaCollection = firestore.collection<Especialista>('especialistas');
    this.especialistas = this.especialistaCollection.valueChanges({idField: 'id'});

    this.especialidadesCollection = firestore.collection<Especialista>('especialidades');
    this.especialidades = this.especialidadesCollection.valueChanges({idField: 'id'});



  }

  Login(email : string , password : string){
    
    
    return this.auth.signInWithEmailAndPassword(email, password);

  }

  RegistrarPaciente(paciente : Paciente){
    return this.pacienteCollection.add({...paciente});
  }
  RegistrarEspecialista(especialista : Especialista){
           this.auth.createUserWithEmailAndPassword(especialista.email, especialista.password);
    return this.especialistaCollection.add({...especialista});
  }

}
