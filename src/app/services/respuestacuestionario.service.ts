import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestacuestionarioService {
  encuestaUrl: string;
  apiUrl: string;

  nombreParticiante?: string;
  idCuestionario?: number;
  respuestas: number[] = [];
  cuestionario?: Cuestionario;

  constructor(private http: HttpClient) {
    this.encuestaUrl = environment.endpoint;
    this.apiUrl = '/api/RespuestaCuestionario/';
  }

  guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any> {
    return this.http.post(this.encuestaUrl + this.apiUrl, respuestaCuestionario)
  }

  getListCuestionarioRespuesta(idCuestionario: number): Observable<any> {
    return this.http.get(this.encuestaUrl + this.apiUrl + idCuestionario);
  }

  eliminarRespuestaCuestionario(idRespuestaCuestionario: number): Observable<any> {
    return this.http.delete(this.encuestaUrl + this.apiUrl + idRespuestaCuestionario);
  }

  getCuestionarioByIdRespuesta(idRespuesta: number): Observable<any> {
    return this.http.get(this.encuestaUrl + this.apiUrl + 'GetCuestionarioByIdRespuesta/' + idRespuesta);
  }
}
