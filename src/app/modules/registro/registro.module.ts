import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroPacienteComponent } from 'src/app/pages/registro-paciente/registro-paciente.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    RegistroComponent,
    RegistroPacienteComponent

  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegistroModule { }
