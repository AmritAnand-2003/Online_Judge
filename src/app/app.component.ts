import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProblemComponent } from './problem/problem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProblemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oj';
}
