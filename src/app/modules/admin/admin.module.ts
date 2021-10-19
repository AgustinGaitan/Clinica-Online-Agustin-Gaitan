import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminUsuariosComponent } from 'src/app/pages/admin-usuarios/admin-usuarios.component';
import { ListadoTodosUsuariosComponent } from 'src/app/components/listado-todos-usuarios/listado-todos-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AdminUsuariosComponent,
    ListadoTodosUsuariosComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
