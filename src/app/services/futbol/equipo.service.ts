import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Equipo } from 'src/app/models/futbol/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  constructor(private http: HttpClient) { }
  private URL = 'http://192.168.100.180:8000/api';

  insertarEquipo(equipo: Equipo):Observable<Equipo>{
    return this.http.post<Equipo>(`${this.URL}/equipo`,equipo);
  }
  obtenerEquipo():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.URL}/tabla/equipo`)
  }
  actualizarEquipo(id:number,equipo:Equipo):Observable<void>{
    return this.http.put<void>(`${this.URL}/equipo/${id}`,equipo);
  }
  eliminarEquipo(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/equipo/${id}`);
  }
  buscar(id:number):Observable<Equipo>{
    return this.http.get<Equipo>(`${this.URL}/tabla/equipo/${id}`);
  }
}
