import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged : any = false;

  constructor(private auth : AngularFireAuth, private router : Router) { 
    auth.authState.subscribe((user) => (this.logged= user));
  }

  Login(email : string , password : string){
    
    
    return this.auth.signInWithEmailAndPassword(email, password);

  }
}
