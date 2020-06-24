import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Home , Cliente} from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

private urlEndPoint = 'https://coronavirus-19-api.herokuapp.com/countries/peru';
private urlEndPointLocal = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {  }


getCasos(): Observable<Home> {
  return this.http.get<Home>(this.urlEndPoint);
}

getCliente(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.urlEndPointLocal);
}


}
