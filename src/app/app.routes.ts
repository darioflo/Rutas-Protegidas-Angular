import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { ClientesComponent } from './routes/clientes/clientes.component';
import { ReportesComponent } from './routes/reportes/reportes.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canMatch: [authGuard] },
  { path: 'clientes', component: ClientesComponent, canMatch: [authGuard] },
  { path: 'reportes', component: ReportesComponent, canMatch: [authGuard] },
];
