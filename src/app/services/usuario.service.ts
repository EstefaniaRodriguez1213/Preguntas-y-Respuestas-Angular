import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient ) {
    this.myAppUrl = 'https://localhost:44394/';
    this.myApiUrl = 'api/Usuario';
   }

  // saveUser(usuario: Usuario): Observable<any>{
  //   return this.http.post(this.myAppUrl + this,this.myApiUrl, usuario);
  // }
}
