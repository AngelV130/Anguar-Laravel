import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Roles } from 'src/app/models/roles';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  constructor(private http: HttpClient) {}
  public autorizado:boolean = false;
  public usuario:boolean = false;
  public login:boolean = false
  private URL = environment.apiBaseUrl;

  iniciarSesion(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/users/loging`,user);
  }
  registrarUusario(user: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}/users`,user);
  }
  getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL}/token`);
  }
  enviarCodigo(codigo:number,$id:number){
    return this.http.post(`${this.URL}/verificacion/${$id}`,{code:codigo});
  }

  cerrarSesion(){
    return this.http.post(`${this.URL}/users/logOut`,null);
  }
  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}/get/users`);
  }
  obtenerUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL}/get/users/${id}`);
  }
  
  obtenerRoles():Observable<Roles[]>{
    return this.http.get<Roles[]>(`${this.URL}/roles`);
  }
  actualizar(user:Usuario,id:number){
    return this.http.put(`${this.URL}/usuario/${id}`,user)
  }
}
