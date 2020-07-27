import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponsePasswordResetComponent } from './components/password/response-password-reset/response-password-reset.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: DashboardComponent,
  canActivate: [AuthGuardService] },
	{ path: 'login', component: LoginComponent },
	{ path: 'request-pwd-reset', component: RequestResetComponent },
	{ path: 'response-password-reset', component: ResponsePasswordResetComponent },
	{ path: 'register', component: RegisterComponent,
  canActivate: [AuthGuardService]  },
  {path: '**', redirectTo: 'home'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
