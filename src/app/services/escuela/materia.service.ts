import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { materias } from 'src/app/models/escuela/materias';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  API="http://127.0.0.1:8000/api"
  private _refresh$ = new Subject<void>()
  private obtenerMaterias=this.API+'/tabla/materia'
  private createMateria=this.API+'/materia'
  private updateMateria=this.API+'/materia/actualizar'

  constructor(private http:HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }

  getMaterias():Observable<materias[]>{
    return this.http.get<materias[]>(this.obtenerMaterias).pipe(catchError(this.handleError),(retry(3)))
  }
  addMateria(materia: materias): Observable<materias> {
    return this.http.post<materias>(this.createMateria, materia).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();}))
  }
  


  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }
}
