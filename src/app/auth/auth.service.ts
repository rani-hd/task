import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private db: AngularFirestore) {
  }
  isAuthenticated:boolean=false;
  user_Id:string = "";

  setUserId(id:string){
    debugger
    this.user_Id = id
    this.isAuthenticated = true;
  }

  getUserId(){
    return this.user_Id||"";
  }
  
  signUp(data:any){
    const id = this.db.createId();
    const usersRef = this.db.collection('users');
   return usersRef.doc(id).set({id:id, ...data });
  }

  getUser(){
    return this.db.collection('users').valueChanges();
  }

  getAuthStatus(){
    return this.isAuthenticated;
  }

}



