import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user_id: string = '';
  allBlogs: any = [];
 constructor(public router: Router, private auth: AuthService,private dialogRef: MatDialog,public coreURL: BackendService,) {}

  openDialog(){
    this.user_id = this.auth.getUserId();
    if(this.user_id){
      this.router.navigate(['blog-page']);
    }
    else{
    const dialogRef = this.dialogRef.open(PopUpComponent,{autoFocus:false});
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_id = this.auth.getUserId();
      if(this.user_id){
        this.router.navigate(['blog-page']);
      }
    });
  }
}
 openDialogProfile(){
    this.user_id = this.auth.getUserId();
    if(this.user_id){
      this.router.navigate(['profile']);
    }
    else{
    const dialogRef = this.dialogRef.open(PopUpComponent,{autoFocus:false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_id = this.auth.getUserId();
      if(this.user_id){
        this.router.navigate(['profile']);
      }
    });
  }
}
  logout(){
    this.user_id='';
    this.auth.setUserId("");
  }
  ngOnInit(): void {
    this.user_id = this.auth.getUserId();
    this.initUser();
  }
  initUser() {
    let blogcheck = this.coreURL.getData().subscribe((snapshot) => {
      blogcheck.unsubscribe();
      console.log(snapshot);
      const data: any = [];
      let key: any = {};
      for (key of snapshot) {
       data.push(key);
       }
      this.allBlogs = data;
    });
  }
  goToPage(route: string) {
    this.router.navigate([route]);

  }
}
