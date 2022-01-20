import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
  constructor(private auth: AngularFireAuth,private router:Router) {}

  ngOnInit(): void {}

  
  signUp() {
    // const data = {
    //   name: this.name,
    //   username: this.username,
    //   email: this.email,
    //   password: this.password
    // };

    //console.log('data', data);
    this.auth.createUserWithEmailAndPassword(this.email,this.password).then(data=>{
      console.log('data',data)
      this.router.navigate(['login'])
    })

  }
}
