import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaChamadosComponent } from './components/lista-chamados/lista-chamados.component';
import { FormChamadoComponent } from './components/form-chamado/form-chamado.component';
import { ListaPrestadoresComponent } from './components/lista-prestadores/lista-prestadores.component';
import { PrestadorFormComponent } from './components/prestador-form/prestador-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chamados', component: ListaChamadosComponent },
  { path: 'chamados/novo', component: FormChamadoComponent },
  { path: 'chamados/editar/:id', component: FormChamadoComponent },
  { path: 'prestadores/novo', component: PrestadorFormComponent },
  { path: 'prestadores/editar/:id', component: PrestadorFormComponent },
  { path: 'prestadores', component: ListaPrestadoresComponent },
  
  
];