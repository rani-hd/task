import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData:any={};
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initProfile()
  }

  initProfile(){
    let logUser = this.auth.getUser().subscribe((data) => {
      logUser.unsubscribe();
      let user: any = {};
      const user_id = this.auth.getUserId()
      for (user of data) {
        if(user.username === user_id){
          this.userData = user
        }
      }

    });
  }

  updateProfile(){
    this.auth.signUp(this.userData).then(data=>{
      this.router.navigate(['home-page'])
    })
  }
}
