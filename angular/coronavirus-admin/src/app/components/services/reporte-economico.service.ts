import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReporteEconomico } from '../entitys/reporte-economico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteEconomicoService {

   private urlEndPoint = 'https://corona-spring.herokuapp.com/api/reconomicos';
  // private urlEndPoint = 'http://localhost:8080/api/reconomicos';

  constructor(private http: HttpClient) { }

  getReporteEconomicos(): Observable<ReporteEconomico[]> {
    return this.http.get<ReporteEconomico[]>(`${this.urlEndPoint}`);
  }

  getReporteEconomico(id): Observable<ReporteEconomico> {
    return this.http.get<ReporteEconomico>(`${this.urlEndPoint}/${id}`);
  }

  delete(id: number): Observable<ReporteEconomico> {
    return this.http.delete<ReporteEconomico>(`${this.urlEndPoint}/${id}`);
  }

  create(reporte: ReporteEconomico): Observable<ReporteEconomico> {
    return this.http.post<ReporteEconomico>(`${this.urlEndPoint}`, reporte);
  }




}
