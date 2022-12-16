import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  encuestaUrl: string;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.encuestaUrl = environment.endpoint;
    this.apiUrl = '/api/Login';
   }

   login(usuario: Usuario): Observable<any>{
    return this.http.post(this.encuestaUrl + this.apiUrl, usuario);
   }

   setLocalStorage(data: string):void{
    localStorage.setItem('token', data);
   }

  //  getNombreUsuario():string{
  //   return localStorage.getItem('nombreUsuario')!;
  //  }

   removeLocalStorage(): void{
    localStorage.removeItem('token');
   }

   getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    return decodedToken;
   }
  }
