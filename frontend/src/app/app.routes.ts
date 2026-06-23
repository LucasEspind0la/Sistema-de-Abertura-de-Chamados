import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaChamadosComponent } from './components/lista-chamados/lista-chamados.component';
import { FormChamadoComponent } from './components/form-chamado/form-chamado.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chamados', component: ListaChamadosComponent },
  { path: 'chamados/novo', component: FormChamadoComponent },
  { path: 'chamados/editar/:id', component: FormChamadoComponent }
];