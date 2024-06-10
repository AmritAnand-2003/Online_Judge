import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProblemComponent } from './problem/problem.component';

export const routes: Routes = [
    {path: '', redirectTo: 'register-component', pathMatch: 'full'}, 
    {path: 'register-component', component: RegisterComponent},
    {path: 'login-component', component: LoginComponent},
    {path: 'home-component', component: HomeComponent},
    {path: 'problem/:id', component: ProblemComponent},

];