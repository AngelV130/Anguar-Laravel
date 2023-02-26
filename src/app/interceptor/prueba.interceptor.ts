import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService } from 'ngx-cookie-service'

@Injectable()
export class PruebaInterceptor implements HttpInterceptor {
  constructor(private cookiesSVC:CookieService){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.cookiesSVC.check("ACCESS_TOKEN")){
      const clonarRequest = request.clone({
        setHeaders:{
          'Authorization': `Bearer ${this.cookiesSVC.get("ACCESS_TOKEN")}`
        }
      })
      return next.handle(clonarRequest);
    }
    return next.handle(request);
  }
}
