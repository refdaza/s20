import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesion 20';
  users: any;

  constructor(
    private usersService: UsersService
  ) { }
  listar(){
    this.usersService.getAllUsers()
    .subscribe((data) => this.users = data)
  }
}
