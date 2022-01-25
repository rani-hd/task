import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData: any = {};
  constructor(
    private auth: AuthService,
    private router: Router,
    private afg: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  login() {
    let logUser = this.auth.getUser().subscribe((data) => {
      logUser.unsubscribe();
      console.log(data);
      let flag = false;
      let user: any = {};
      for (user of data) {
        if (
          this.userData.username === user.username &&
          this.userData.password === user.password
        ) {
          flag = true;
          this.auth.setUserId(this.userData.username);
          this.userData = {};
          this.router.navigate(['home-page']);
        }
      }

      if (flag === false) {
        console.log('Error: User not found');
        this.router.navigate(['signup']);
      }
    });
  }

  loginWithGoogle() {
    this.afg.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data:any)=>{
      console.log('login user',data)
      this.auth.setUserId(data.user.email)
      this.router.navigate(['home-page']);
    })
  }
}
