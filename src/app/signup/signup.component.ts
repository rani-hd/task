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
userData:any={};
  constructor(private auth: AuthService,private router:Router,private afg:AngularFireAuth) {}

  ngOnInit(): void {}

  signUp() {
      this.auth.signUp(this.userData).then(data=>{
        this.userData = {}
        this.router.navigate(['login'])
      })
  }

  signUpWithGoogle() {
    this.afg.createUserWithEmailAndPassword(this.userData.username,this.userData.password).then(data=>{
      console.log('Signup user',data)
      this.router.navigate(['login'])
    })
  }

}
