import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenidaComponent} from '../app/pages/bienvenida/bienvenida.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { AdminGuard } from './guards/admin.guard';
import { AdministradorPacienteGuard } from './guards/administrador-paciente.guard';
import { EspecialistaPacienteGuard } from './guards/especialista-paciente.guard';
import { EspecialistaGuard } from './guards/especialista.guard';
import { GeneralGuard } from './guards/general.guard';
import { PacienteGuard } from './guards/paciente.guard';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { MisTurnosComponent } from './pages/mis-turnos/mis-turnos.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SolicitarTurnoComponent } from './pages/solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

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
    component:PrincipalComponent,
    canActivate:[GeneralGuard]
  },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate:[AdminGuard]
  },
  {
    path:'mi-perfil',
    component: MiPerfilComponent,
    canActivate: [GeneralGuard]
  },
  { path: 'especialista', loadChildren: () => import('./modules/especialista/especialista.module').then(m => m.EspecialistaModule),
    canActivate:[EspecialistaGuard]
  },
  {
    path: 'solicitar-turno',
    component: SolicitarTurnoComponent,
    canActivate: [AdministradorPacienteGuard]

  },
  {
    path:'turnos',
    component: TurnosComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'mis-turnos',
    component: MisTurnosComponent,
    canActivate:[EspecialistaPacienteGuard]
  },
  {
    path:'encuesta',
    component:EncuestaComponent
  },
  {
    path: '',
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
