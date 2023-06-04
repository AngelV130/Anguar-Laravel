import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroService } from './services/usuario/registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private registroSVC:RegistroService,private cookiesSVC:CookieService,private route:Router){}
  title = 'practica-httpclient';
  public sesionIniciada:boolean = false
  ngOnInit(): void {
    this.sesionIniciada = this.registroSVC.login;
    console.log(this.registroSVC.login);
  }
  cerrarSesion(){
    this.registroSVC.cerrarSesion().subscribe(res=>{
      this.cookiesSVC.deleteAll();
      this.route.navigate(['logging']);
    })
  }
}
