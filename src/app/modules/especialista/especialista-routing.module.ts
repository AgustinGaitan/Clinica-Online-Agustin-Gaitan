import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisHorariosComponent } from 'src/app/pages/mis-horarios/mis-horarios.component';
import { EspecialistaComponent } from './especialista.component';

const routes: Routes = [{ path: '', component: EspecialistaComponent },
{
  path:'mis-horarios',
  component: MisHorariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
