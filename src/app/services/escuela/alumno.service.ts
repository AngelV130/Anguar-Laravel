import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/escuela/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API="http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) { }
  insertarAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(`${this.API}/alumno`,alumno);
  }
  obtenerAlumno():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.API}/tabla/alumno`);
  }
  actualizarAlumno(id:number,alumno:Alumno):Observable<void>{
    return this.http.put<void>(`${this.API}/alumno/${id}`,alumno);
  }
  eliminarAlumno(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API}/alumno/${id}`);
  }
  buscar(id:number):Observable<Alumno>{
    return this.http.get<Alumno>(`${this.API}/tabla/alumno/${id}`);
  }
}
