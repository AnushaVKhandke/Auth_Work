import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthResponse } from '../model/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){}

  // http:HttpClient=Inject(HttpClient);

  signUp(email,password){
     const data={email:email,password:password,returnSecureToken:true};
     return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjg_4tfqyc5bGmGXRpsqHf5dn1m60AVCQ',data)
  }
}
