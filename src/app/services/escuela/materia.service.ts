import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { materias } from 'src/app/models/escuela/materias';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  API=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  insertarMateria(materia:materias):Observable<materias>{
    return this.http.post<materias>(`${this.API}/materia`,materia);
  }
  obtenerMaterias():Observable<materias[]>{
    return this.http.get<materias[]>(`${this.API}/tabla/materia`)
  }
  actualizarMateria(id:number,materia:materias):Observable<void>{
    return this.http.put<void>(`${this.API}/materia/${id}`,materia)
  }
  eliminarMateria(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API}/materia/${id}`);
  }
  buscar(id:number):Observable<materias>{
    return this.http.get<materias>(`${this.API}/tabla/materia/${id}`);
  }
}
