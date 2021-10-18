import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenidaComponent} from '../app/pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{

  path:'bienvenida',
  component: BienvenidaComponent
  },
  {
   path: 'login',
   component: LoginComponent
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
