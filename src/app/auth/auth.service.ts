import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable,map } from 'rxjs';

export interface Users {id:string, name: string; username: string;  password: string;  email: string;}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<Users>;
  Users: Observable<Users[]>;
  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<Users>('users');
    this.Users = this.usersCollection.valueChanges();
  }
  
  signUp(userData: any) {
    const id=userData.username;
   return this.usersCollection.doc(id).set(userData);
  }

  login(user:any){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').snapshotChanges()
      .subscribe(snapshots => {
        for(let key of snapshots){
          const userData:any = key.payload.doc.data();
          if(userData.username === user.username&&
            userData.password === user.password)
            this.isAuthenticated = true;
            resolve(true)
        }
        return false
      })
    })
  }

  isAuthenticated:boolean=false;

  getAuthStatus(){
    return this.isAuthenticated;
  }

}



