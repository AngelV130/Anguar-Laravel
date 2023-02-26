import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Paises } from 'src/app/models/futbol/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }
  private URL = 'http://127.0.0.1:8000/api';

  insertarPais(pais: Paises):Observable<Paises>{
    return this.http.post<Paises>(`${this.URL}/pais`,pais);
  }
  obtenerPaises():Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.URL}/tabla/pais`)
  }
  actualizarPais(id:number,pais:Paises):Observable<void>{
    return this.http.put<void>(`${this.URL}/pais/${id}`,pais);
  }
  eliminarPais(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/pais/${id}`);
  }
  buscar(id:number):Observable<Paises>{
    return this.http.get<Paises>(`${this.URL}/tabla/pais/${id}`);
  }
}

