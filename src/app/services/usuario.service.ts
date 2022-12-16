import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  encuestaUrl: string;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.encuestaUrl = environment.endpoint;
    this.apiUrl = '/api/Usuario';
   }

  saveUser(usuario: Usuario): Observable<any>{
    return this.http.post(this.encuestaUrl + this.apiUrl, usuario);
  }

  changePassword(changePassword: any): Observable<any>{
    return this.http.put(this.encuestaUrl + this.apiUrl + '/CambiarPassword', changePassword);
  }
}
