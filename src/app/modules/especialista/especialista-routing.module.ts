import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialMedicoComponent } from 'src/app/components/historial-medico/historial-medico.component';
import { MisHorariosComponent } from 'src/app/pages/mis-horarios/mis-horarios.component';
import { SeccionPacientesComponent } from 'src/app/pages/seccion-pacientes/seccion-pacientes.component';
import { EspecialistaComponent } from './especialista.component';

const routes: Routes = [{ path: '', component: EspecialistaComponent },
{
  path:'mis-horarios',
  component: MisHorariosComponent
},{
  path:'mis-pacientes',
  component: SeccionPacientesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
