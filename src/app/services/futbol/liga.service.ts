import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ligas } from 'src/app/models/futbol/ligas';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http: HttpClient) { }
  private URL = 'http://127.0.0.1:8000/api';

  insertarLiga(liga: Ligas):Observable<Ligas>{
    return this.http.post<Ligas>(`${this.URL}/liga`,liga);
  }
  obtenerLigas():Observable<Ligas[]>{
    return this.http.get<Ligas[]>(`${this.URL}/tabla/liga`)
  }
  actualizarLiga(id:number,liga:Ligas):Observable<void>{
    return this.http.put<void>(`${this.URL}/liga/${id}`,liga);
  }
  eliminarLiga(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/liga/${id}`);
  }
  buscar(id:number):Observable<Ligas>{
    return this.http.get<Ligas>(`${this.URL}/tabla/liga/${id}`);
  }
}
