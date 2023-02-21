import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor(private http: HttpClient) { }
  private URL = 'http://192.168.127.94:8000/api';

  iniciarSesion(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/usuario/iniciar-sesion`,user);
  }
  registrarUusario(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/usuario/registrar`,user);
  }
}
