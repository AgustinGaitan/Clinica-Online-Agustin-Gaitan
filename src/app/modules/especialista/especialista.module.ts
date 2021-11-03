import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { EspecialistaComponent } from './especialista.component';
import { SeccionPacientesComponent } from 'src/app/pages/seccion-pacientes/seccion-pacientes.component';





@NgModule({
  declarations: [
    EspecialistaComponent,
    SeccionPacientesComponent,

  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    
  ]
})
export class EspecialistaModule { }
