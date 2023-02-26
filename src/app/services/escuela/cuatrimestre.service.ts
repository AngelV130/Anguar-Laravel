import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuatrimestre } from 'src/app/models/escuela/cuatrimestre';

@Injectable({
  providedIn: 'root'
})
export class CuatrimestreService {
  API="http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) { }

  insertarcuatrimestre(cuatrimestre:Cuatrimestre):Observable<Cuatrimestre>{
    return this.http.post<Cuatrimestre>(`${this.API}/cuatri`,cuatrimestre);
  }
  obtenercuatrimestres():Observable<Cuatrimestre[]>{
    return this.http.get<Cuatrimestre[]>(`${this.API}/tabla/cuatri`)
  }
  actualizarcuatrimestre(id:number,cuatrimestre:Cuatrimestre):Observable<void>{
    return this.http.put<void>(`${this.API}/cuatri/${id}`,cuatrimestre)
  }
  eliminarcuatrimestre(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API}/cuatri/${id}`);
  }
  buscar(id:number):Observable<Cuatrimestre>{
    return this.http.get<Cuatrimestre>(`${this.API}/tabla/cuatri/${id}`);
  }
}
