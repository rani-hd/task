import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  signUp() {
    const data = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    //console.log('data', data);
    this.auth.signUp(data);
  }
}
