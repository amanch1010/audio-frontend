import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    this.apiService.login({ email: this.email, password: this.password }).subscribe(response => {
      // Navigate to audio-crud component on successful login
      this.router.navigate(['/audio-crud']);
      console.log(response);
    }, error => {
      // Handle login error
      console.error(error);
    });
  }
}