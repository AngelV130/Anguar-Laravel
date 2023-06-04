import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit{
  constructor(private registroSVC:RegistroService,private cookiesSVC:CookieService,private route:Router){}
  title = 'practica-httpclient';
  public autorizado:boolean = this.registroSVC.autorizado
  ngOnInit(): void {
  }
  cerrarSesion(){
    this.registroSVC.cerrarSesion().subscribe(res=>{
      this.cookiesSVC.deleteAll();
      this.route.navigate(['logging']);
    })
  }
}
