import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient ) {
    this.myAppUrl = 'https://localhost:44394/';
    this.myApiUrl = 'api/Login';
   }

   login(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  setLocalStorage(data: Usuario): void {
    localStorage.setItem('nombreUsuario', data.nombreUsuario);
  }
}
