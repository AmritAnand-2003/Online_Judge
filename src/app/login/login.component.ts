import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {}
  username: string = '';
  password: string = '';

  hide =  true;

  onSubmit() {
    
    console.log("Form submitted",this.username, this.password);
    this.loginService.login({username: this.username, password: this.password}).subscribe(
      response => {
        console.log('Registration successful', response);
        // this.router.navigate(['/auth/login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
