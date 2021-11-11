import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminUsuariosComponent } from 'src/app/pages/admin-usuarios/admin-usuarios.component';
import { ListadoTodosUsuariosComponent } from 'src/app/components/listado-todos-usuarios/listado-todos-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcadoDirective } from 'src/app/directives/marcado.directive';
import { ChartsModule } from 'ng2-charts';
import { ObtenerNombrePipe } from 'src/app/pipes/obtener-nombre.pipe';
import { HabilitarDeshabilitarDirective } from 'src/app/directives/habilitar-deshabilitar.directive';
import { SharedModuleModule } from '../shared-module/shared-module.module';



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
    FormsModule,
    ChartsModule,
    SharedModuleModule
  ],
  providers: [ObtenerNombrePipe],
})
export class AdminModule { }
