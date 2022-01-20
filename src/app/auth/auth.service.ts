import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(userdata: any) {
    console.log(userdata);
  }
  signUp(userdata: any) {
    console.log(userdata);
  }

}



