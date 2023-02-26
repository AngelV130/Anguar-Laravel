import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, BehaviorSubject, pipe, Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor(private http: HttpClient) {}
  private URL = 'http://127.0.0.1:8000/api';
  iniciarSesion(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/usuario/iniciar-sesion`,user);
  }
  registrarUusario(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/usuario/registrar`,user);
  }
  getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL}/usuario`);
  }
}
