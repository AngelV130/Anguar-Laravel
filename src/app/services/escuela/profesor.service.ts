import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/escuela/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  API="http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) { }

  insertarProfesor(profesor:Profesor):Observable<Profesor>{
    return this.http.post<Profesor>(`${this.API}/profesor`,profesor);
  }
  obtenerProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${this.API}/tabla/profesores`)
  }

  actualizarProfesor(id:number,profesor:Profesor):Observable<void>{
    return this.http.put<void>(`${this.API}/profesor/${id}`,profesor)
  }
  eliminarProfesor(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API}/profesor/${id}`);
  }
  buscar(id:number):Observable<Profesor>{
    return this.http.get<Profesor>(`${this.API}/tabla/profesor/${id}`);
  }
}
