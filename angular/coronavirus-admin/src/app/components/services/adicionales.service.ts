import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*Entitys*/
import { Departamento } from '../entitys/departamento';
import { Provincia } from '../entitys/provincia';
import { Documento } from '../entitys/documento';
import { Nacionalidad } from '../entitys/nacionalidad';

@Injectable({
  providedIn: 'root'
})
export class AdicionalesService {

   /* private urlEndPoint = 'http://localhost:8080/api/usuarioscasos';*/
  private urlEndPoint = 'https://corona-spring.herokuapp.com/api/usuarioscasos';
  constructor(private http:HttpClient) { }

  getDepartamento(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.urlEndPoint}/departamentos`);
  }

  getProvincia(id:number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.urlEndPoint}/departamentos/${id}`);
  }

  getDistrito(id:number): Observable<Provincia> {
    return this.http.get<Provincia>(`${this.urlEndPoint}/provincias/${id}`);
  }
  
  getDocumento(): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.urlEndPoint}/documentos`);
  }

  getNacionalidad(): Observable<Nacionalidad[]> {
    return this.http.get<Nacionalidad[]>(`${this.urlEndPoint}/nacionalidad`);
  }

}
