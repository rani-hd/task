import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username: string = '';
 password: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {}
  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    //console.log('data', data);
    this.auth.login(data);
  }
}