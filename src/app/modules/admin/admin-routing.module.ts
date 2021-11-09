import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcadoDirective } from 'src/app/directives/marcado.directive';
import { AdminUsuariosComponent } from 'src/app/pages/admin-usuarios/admin-usuarios.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{
  path:'usuarios',
  component: AdminUsuariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
