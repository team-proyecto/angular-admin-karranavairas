import { Injectable } from '@angular/core';
import { UsuariosCasos } from '../entitys/usuarios-casos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint = 'https://corona-spring.herokuapp.com/api/usuarioscasos';
// private urlEndPoint = 'http://localhost:8080/api/usuarioscasos';

  constructor(private http: HttpClient) { }

getUsuariosCasos(): Observable<UsuariosCasos[]> {
  return this.http.get<UsuariosCasos[]>(this.urlEndPoint);
}

getUsuario(id): Observable<UsuariosCasos> {
  return this.http.get<UsuariosCasos>(`${this.urlEndPoint}/${id}`);
}

delete(id: number): Observable<UsuariosCasos> {
  return this.http.delete<UsuariosCasos>(`${this.urlEndPoint}/${id}`);
}

create(usuario: UsuariosCasos): Observable<UsuariosCasos> {
  return this.http.post<UsuariosCasos>(this.urlEndPoint, usuario);
}

}
