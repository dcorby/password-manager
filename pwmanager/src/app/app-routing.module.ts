import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'passwords', component: PasswordsComponent, canActivate: [AuthGuard] },
  { path: 'new-password', component: NewPasswordComponent, canActivate: [AuthGuard] },
  { path: 'passwords/:site', component: PasswordComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
