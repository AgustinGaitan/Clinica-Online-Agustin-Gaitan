import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPacienteComponent } from 'src/app/pages/registro-paciente/registro-paciente.component';
import { RegistroComponent } from './registro.component';

const routes: Routes = [
  { path: '',
   component: RegistroComponent 
  },
  {
    path:'paciente',
    component: RegistroPacienteComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
