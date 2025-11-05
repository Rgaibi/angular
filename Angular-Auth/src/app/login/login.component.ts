import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services-interceptors/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/authResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
       
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  authObs: Observable<AuthResponse>;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onFormSubmitted(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;  

    if(this.isLoginMode){
      return;
      
    }
    else{
      
      this.authService.signUp(email, password).subscribe({
        next: (res) => { console.log(res) },
        error: (error) => { console.log(error); }
      });
    }   
  }

}
