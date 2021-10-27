import { Injectable, ɵsetCurrentInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Administrador } from '../clases/administrador';
import { Especialista } from '../clases/especialista';
import { Paciente } from '../clases/paciente';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged : any = false;
  //Pacientes
  todosLosPacientes : any;
  pacientes : Observable<Paciente[]>;
  pacienteCollection : AngularFirestoreCollection<Paciente>;
  //Especialista
  todosLosEspecialistas : any[] = [];
  especialistas : Observable<Especialista[]>;
  especialistaCollection : AngularFirestoreCollection<Especialista>;
  //Especialidades
  especialidades : Observable<any[]>;
  especialidadCollection : AngularFirestoreCollection<any>;
  todasLasEspecialidades : any[] = [];
  //Admin
  todosLosAdmin : any;
  administradores : Observable<Administrador[]>;
  administradorCollection : AngularFirestoreCollection<Administrador>;
    //
  usuarioActual : any;
  especialistaHabilitado : boolean = false;
  //
  turnos : Observable<any[]>;
  turnoCollection : AngularFirestoreCollection<any>;
  todosLosTurnos : any[] = [];
  //
  encuestas : Observable<any[]>;
  encuestaCollection : AngularFirestoreCollection<any>;


  constructor(private auth : AngularFireAuth, private router : Router, private firestore : AngularFirestore) { 
    auth.authState.subscribe((user) => (this.logged= user));

    this.pacienteCollection = firestore.collection<Paciente>('pacientes');
    this.pacientes = this.pacienteCollection.valueChanges({idField: 'id'});

    this.especialistaCollection = firestore.collection<Especialista>('especialistas');
    this.especialistas = this.especialistaCollection.valueChanges({idField: 'id'});

    this.especialidadCollection = firestore.collection<Especialista>('especialidades');
    this.especialidades = this.especialidadCollection.valueChanges({idField: 'id'});

    this.administradorCollection = firestore.collection<Administrador>('administradores');
    this.administradores = this.administradorCollection.valueChanges({idField: 'id'});

    
    this.turnoCollection = firestore.collection<any>('turnos');
    this.turnos = this.turnoCollection.valueChanges({idField: 'id'});

    this.encuestaCollection = firestore.collection<any>('encuestas');
    this.encuestas = this.encuestaCollection.valueChanges({idField: 'id'});

    this.especialistas.subscribe((data : any) =>{
      this.todosLosEspecialistas = data;
    })

    this.pacientes.subscribe((data : any) =>{
      this.todosLosPacientes = data;
    })

    this.administradores.subscribe((data : any) =>{
      this.todosLosAdmin = data;
    })

    this.especialidades.subscribe((data : any) =>{
      this.todasLasEspecialidades = data;
    })

    this.turnos.subscribe((data : any)=>{
      	this.todosLosTurnos = data;
    });

  }

 

  async Login(email : string , password : string){
    
    let tipo : string = "";
    for(let item of this.todosLosAdmin){
      if(email == item.email){
        this.usuarioActual = item;
        tipo = "administrador";
      }
    }
    
    await this.auth.signInWithEmailAndPassword(email, password)
    .then((res : any)=>{

      
      if(res.user?.emailVerified || tipo=="administrador" || email=="paciente@paciente.com" ||
      email=="especialista@especialista.com" ||
      email=="administrador@administrador.com" ){
    
 

          for(let item of this.todosLosEspecialistas){

            if(email == item.email){

              this.usuarioActual = item;
              tipo = "especialista";
              if(item.habilitado){
                this.especialistaHabilitado = true;
              }else{
                this.especialistaHabilitado = false;
              }
              break;
            }
          }
          for(let item of this.todosLosPacientes){

            if(email == item.email){
              this.usuarioActual = item;
              tipo = "paciente";
            }
          }

          if(tipo=="especialista"){
         
            if(this.especialistaHabilitado){

  
              this.usuarioActual.tipo = tipo;
              this.router.navigateByUrl('/principal');

            }else{
              Swal.fire({
                title: 'Error!',
                text: 'No verificaste el mail o el administrador no habilitó tu cuenta.',
                icon: 'error',
                confirmButtonText: 'Entendido.'
              });
            }
          }else{
    
            this.usuarioActual.tipo = tipo;
            this.router.navigateByUrl('/principal');
          }
      
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'No verificaste el mail',
          icon: 'error',
          confirmButtonText: 'Entendido.'
        });
      }
    }).catch((error : any) => {

      Swal.fire({
        title: 'Error!',
        text: 'Alguna credencial es incorrecta.',
        icon: 'error',
        confirmButtonText: 'Entendido.'
      });
    });

  }


  RegistrarPaciente(paciente : Paciente){

    this.auth.createUserWithEmailAndPassword(paciente.email, paciente.password)
    .then((res) =>{
      res.user?.sendEmailVerification();

      Swal.fire({
        title: 'Registrado!',
        text: 'Registrado como paciente.',
        icon: 'success',
      });
  
      setTimeout(() => {
        if(this.usuarioActual != null){
          this.router.navigateByUrl('/admin/usuarios');
        }else{
          this.router.navigateByUrl('/login');
        }
      }, 2000);
      paciente.uid = res.user?.uid;
      return this.pacienteCollection.add({...paciente});
      
    }).catch((error)=>{
      if(error.code="auth/email-already-exists"){
        Swal.fire({
          title: 'Error!',
          text: 'El mail ya está siendo usado por otro usuario.',
          icon: 'error',
          confirmButtonText: 'Entendido.'
        });
      }
    });

   
  }
  RegistrarEspecialista(especialista : Especialista){

      this.auth.createUserWithEmailAndPassword(especialista.email, especialista.password)
      .then((res) =>{
        res.user?.sendEmailVerification();
        Swal.fire({
          title: 'Registrado!',
          text: 'Registrado como especialista.',
          icon: 'success',
        });
        setTimeout(() => {
          if(this.usuarioActual != null){
            this.router.navigateByUrl('/admin/usuarios');
          }else{
            this.router.navigateByUrl('/login');
          }
        }, 2000);
        especialista.uid = res.user?.uid;
        return this.especialistaCollection.add({...especialista});

      }).catch((error)=>{
        if(error.code="auth/email-already-exists"){
          Swal.fire({
            title: 'Error!',
            text: 'El mail ya está siendo usado por otro usuario.',
            icon: 'error',
            confirmButtonText: 'Entendido.'
          });
        }
      });;
      
  }

  RegistrarAdministrador(admin : Administrador){

    this.auth.createUserWithEmailAndPassword(admin.email, admin.password)
    .then((res : any)=>{
      Swal.fire({
        title: 'Registrado!',
        text: 'Registrado como administrador.',
        icon: 'success',
      });
      admin.uid = res.user?.uid;
      return this.administradorCollection.add({...admin}); 
    })
    .catch((error : any)=>{
      if(error.code="auth/email-already-exists"){
        Swal.fire({
          title: 'Error!',
          text: 'El mail ya está siendo usado por otro usuario.',
          icon: 'error',
          confirmButtonText: 'Entendido.'
        });
      }
    });
    
 
  }

  AgregarEspecialidad(especialidad : any){
    
    let especialidadObj = {
      nombre : especialidad
    }
    return this.especialidadCollection.add(especialidadObj);
  }

  HabilitarEspecialista(especialista : any){
    console.log(especialista);
    this.especialistaCollection.doc(especialista.id).update({'habilitado' : true});
  }
  DeshabilitarEspecialista(especialista : any){
    this.especialistaCollection.doc(especialista.id).update({'habilitado' : false});
  }

  AgregarDisponibilidadHoraria(especialista : any , horario : any[]){
    return this.especialistaCollection.doc(especialista.id).update({'horarios' : horario});
  }

  SetearTurno(horario : any){
    return this.turnoCollection.add({...horario});
  }

  BorrarTurno(turno :any){
    return this.turnoCollection.doc(turno.id).delete();
  }

  ModificarTurno(turno : any, accion : string){
    return this.turnoCollection.doc(turno.id).update({'estado' : accion});
  }

  ComentarioPaciente(turno : any, comentario : any){
    return this.turnoCollection.doc(turno.id).update({'comentarioPaciente' : comentario});
  }

  ComentarioEspecialista(turno : any, comentario : any){
    return this.turnoCollection.doc(turno.id).update({'comentarioEspecialista' : comentario});
  }

  ComentarioAdministrador(turno : any, comentario : any){
    return this.turnoCollection.doc(turno.id).update({'comentarioAdministrador' : comentario});
  }

  SubirEncuesta(encuesta : any){
    return this.encuestaCollection.add({...encuesta});
  }

  Calificar(turno : any, calificacion : any){
    return this.turnoCollection.doc(turno.id).update({'calificacion': calificacion})
  }
}
