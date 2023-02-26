import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { RegistroService } from '../services/usuario/registro.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRolGuard implements CanActivate {
  constructor(private registroSVC:RegistroService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.registroSVC.getUser().pipe(
        map((res)=>{
          if(route.data['rol'].includes(res.rol_id)){
            return true
          }
          alert("No Tienes Permisos");
          return false
        })
      );
  }
}
