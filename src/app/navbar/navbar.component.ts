import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private registro:RegistroService){}
  public isAdmin:boolean = this.registro.autorizado;
  ngOnInit(): void {
  }
  
}
