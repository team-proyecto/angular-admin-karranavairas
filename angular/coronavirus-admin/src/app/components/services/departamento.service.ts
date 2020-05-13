import { Injectable } from '@angular/core';
import { Departamento } from '../entitys/departamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndPoint = 'https://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getDepartamento(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.urlEndPoint}/departamento`);
  }

}
