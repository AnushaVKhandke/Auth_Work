import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 isLoggedIn=true;

 authservice:AuthService = inject(AuthService)

 onSwitch(){
  this.isLoggedIn=!this.isLoggedIn
 }

 onSubmitted(form:NgForm){
  const email=form.value.email;
  const password=form.value.password;

  if(this.isLoggedIn){
    return;
  }else{
    this.authservice.signUp(email,password).subscribe({
        next:(res)=>{console.log(res)},
        error:(err)=>{console.log(err)}
    })
  }
   console.log(form.value);
   form.reset();
 }
}
