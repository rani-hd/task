import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user_id: string = '';
 constructor(public router: Router, private auth: AuthService,private dialogRef: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialogRef.open(PopUpComponent,{autoFocus:false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_id = this.auth.getUserId();
      if(this.user_id){
        this.router.navigate(['blog-page']);
      }
    });
  }

  openDialogProfile(){
    const dialogRef = this.dialogRef.open(PopUpComponent,{autoFocus:false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_id = this.auth.getUserId();
      if(this.user_id){
        this.router.navigate(['profile']);
      }
    });
  }
  ngOnInit(): void {
    this.user_id = this.auth.getUserId();
  }
  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
