import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  encuestaUrl: string;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.encuestaUrl = environment.endpoint;
    this.apiUrl = '/api/Cuestionario/';
  }

  guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    return this.http.post(this.encuestaUrl + this.apiUrl, cuestionario);
  }

  getListCuestionarioByUser(): Observable<any>{
    return this.http.get(this.encuestaUrl + this.apiUrl + 'GetListCuestionarioByUser');
  }

  deleteCuestionario(idCuestionario: number): Observable<any> {
    return this.http.delete(this.encuestaUrl + this.apiUrl + idCuestionario);
  }

  getCuestionario(idCuestionario: number): Observable<any>{
    return this.http.get(this.encuestaUrl + this.apiUrl + idCuestionario);
  }

  getListCuestionarios(): Observable<any>{
    return this.http.get(this.encuestaUrl + this.apiUrl + 'GetListCuestionarios');
  }
}
