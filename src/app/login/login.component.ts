import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

interface users {
 username:string,
 password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:users={username:'',password:''}
  constructor(private auth: AuthService,private router:Router) {}
 
  ngOnInit(): void {}

  login() {
    this.auth.login(this.userData).then(status=>{
      debugger
      if(status){
          this.router.navigate(['home-page'])
          this.userData = {username:'',password:''}
      }else{
          this.router.navigate(['signup'])
      }
    })
   
  }
}