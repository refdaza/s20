import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login();
    this.router.navigate(['/home']);
  }
  onLogout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
