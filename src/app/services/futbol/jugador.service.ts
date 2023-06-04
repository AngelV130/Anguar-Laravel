import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Jugador } from 'src/app/models/futbol/jugador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  constructor(private http: HttpClient) { }
  private URL = environment.apiBaseUrl;

  insertarJugador(jugador: Jugador):Observable<Jugador>{
    return this.http.post<Jugador>(`${this.URL}/jugador`,jugador);
  }
  obtenerJugador():Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.URL}/tabla/jugador`)
  }
  actualizarJugador(id:number,jugador:Jugador):Observable<void>{
    return this.http.put<void>(`${this.URL}/jugador/${id}`,jugador);
  }
  eliminarJugador(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/jugador/${id}`);
  }
  buscar(id:number):Observable<Jugador>{
    return this.http.get<Jugador>(`${this.URL}/tabla/jugador/${id}`);
  }
}
