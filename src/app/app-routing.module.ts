import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'account', children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
