import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { Paises } from 'src/app/models/futbol/paises';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient,private cookiesSvc:CookieService) { }
  private URL = environment.apiBaseUrl;

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

  pruebasse(id:number):Observable<any>{
    const eventSource = new EventSource(`${this.URL}/sse/${id}`)
    return new Observable((sub)=>{
      eventSource.addEventListener(`partida${id}`,(event)=>{
        console.log(event)
        sub.next(JSON.parse(event.data))
      })
      eventSource.addEventListener('message',(event)=>{
        console.log(event)
        sub.next(event.data)
      })
      eventSource.addEventListener(`final:partida${id}`,(event)=>{
        console.log(event)
        sub.next(JSON.parse(event.data))
      })
      eventSource.addEventListener('error', (event) => {
        if (event.eventPhase === EventSource.CLOSED) {
          // La conexión ha sido cerrada por el servidor
          console.log('La conexión ha sido cerrada por el servidor');
        }
      })
    })
  }
  uniresepartida(id:number){
    return this.http.get<any>(`${this.URL}/partida/${id}`)
  }
  buscarPartida(){
    return this.http.get<any[]>(`${this.URL}/partida`)
  }
  ataque(id:number,atque:string){
    const body = {id:id,ataque:atque}
    return this.http.post(`${this.URL}/ataque`,body)
  }
  creaPartida(data:any){
    return this.http.post<any>(`${this.URL}/partida`,data)
  }
  salirPartida(id:number){
    return this.http.post<any>(`${this.URL}/salir/${id}`,null)
  }
  sse(){
    const eventSource = new EventSource(`${this.URL}/sse`)
    return new Observable((sub)=>{
      eventSource.addEventListener('message',(event)=>{
        console.log(event)
        sub.next(event.data)
      })
      eventSource.addEventListener('error', (event) => {
        if (event.eventPhase === EventSource.CLOSED) {
          // La conexión ha sido cerrada por el servidor
          console.log('La conexión ha sido cerrada por el servidor');
        }
      })
    })
  }
}

