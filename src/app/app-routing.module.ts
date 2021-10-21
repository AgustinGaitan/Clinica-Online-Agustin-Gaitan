import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenidaComponent} from '../app/pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [{

  path:'bienvenida',
  component: BienvenidaComponent
  },
  {
   path: 'login',
   component: LoginComponent
  },
  { path: 'registro', loadChildren: () => import('./modules/registro/registro.module').then(m => m.RegistroModule) },
  {
    path: 'principal',
    component:PrincipalComponent
  },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {
    path:'mi-perfil',
    component: MiPerfilComponent
  },
  {
    path:'',
    redirectTo:'bienvenida',
    pathMatch:'full'
    
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
