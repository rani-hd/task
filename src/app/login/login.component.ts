import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username: string = '';
 password: string = '';
 constructor(private auth: AngularFireAuth,private router:Router) {}

  ngOnInit(): void {}
  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
      console.log('data',data)
      this.router.navigate(['home-page'])
    })
  }
}