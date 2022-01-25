import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user_id: string = '';
  constructor(public router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.user_id = this.auth.getUserId();
  }
  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
