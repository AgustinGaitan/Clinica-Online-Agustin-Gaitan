import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
