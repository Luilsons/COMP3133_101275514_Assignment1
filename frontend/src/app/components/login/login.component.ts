import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN_USER } from './login.graphql';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    console.log('✅ LoginComponent loaded!');
  }

  loginUser() {
    console.log('🔐 Attempting login with:', this.email);

    this.apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        email: this.email,
        password: this.password
      }
    }).subscribe({
      next: (res: any) => {
        const token = res.data.login.token;
        localStorage.setItem('token', token);
        window.location.href = '/employees';
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }
}
