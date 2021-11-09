import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
//Angular

import{ AngularFireModule } from '@angular/fire/compat';
import { RegistroEspecialistaComponent } from './pages/registro-especialista/registro-especialista.component';
import { ListadoEspecialidadesComponent } from './components/listado-especialidades/listado-especialidades.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AdminUsuariosComponent } from './pages/admin-usuarios/admin-usuarios.component';
import { ListadoTodosUsuariosComponent } from './components/listado-todos-usuarios/listado-todos-usuarios.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { MisHorariosComponent } from './pages/mis-horarios/mis-horarios.component';
import { SolicitarTurnoComponent } from './pages/solicitar-turno/solicitar-turno.component';
import { ListadoEspecialidadesSinFuncComponent } from './components/listado-especialidades-sin-func/listado-especialidades-sin-func.component';
import { ListadoEspecialistasFuncComponent } from './components/listado-especialistas-func/listado-especialistas-func.component';
import { FechaEspPipe } from './pipes/fecha-esp.pipe';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { ListaTurnosComponent } from './components/lista-turnos/lista-turnos.component';
import { MisTurnosComponent } from './pages/mis-turnos/mis-turnos.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { SeccionPacientesComponent } from './pages/seccion-pacientes/seccion-pacientes.component';
import { MarcadoDirective } from './directives/marcado.directive';
import { EstadosDirective } from './directives/estados.directive'


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    RegistroEspecialistaComponent,
    ListadoEspecialidadesComponent,
    NavBarComponent,
    PrincipalComponent,
    MiPerfilComponent,
    MisHorariosComponent,
    SolicitarTurnoComponent,
    ListadoEspecialidadesSinFuncComponent,
    ListadoEspecialistasFuncComponent,
    FechaEspPipe,
    ListadoPacientesComponent,
    TurnosComponent,
    ListaTurnosComponent,
    MisTurnosComponent,
    EncuestaComponent,
    HistorialMedicoComponent,
    EstadosDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SweetAlert2Module.forRoot(),
  
  ],
  providers: [FechaEspPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
