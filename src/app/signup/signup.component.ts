import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

interface users {
  name:string,
  username:string,
  email:string,
  password:string
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userData:users={name:'',username:'',email:'',password:''}
  constructor(private auth: AuthService,private router:Router) {}

  ngOnInit(): void {}

  signUp() {
    this.auth.signUp(this.userData).then(data=>{
      this.userData = {name:'',username:'',email:'',password:''}
      this.router.navigate(['login'])
    })

  }
}
