import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../model/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient)

  signUp(email, password) {
    const data = {email: email, password: password, returnSecureToken: true}
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGcbKzdlLjdBslci7iyo8Uv8mIaq6lPNs', data)
  }
}
