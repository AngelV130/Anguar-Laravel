import { Component, OnInit } from '@angular/core';
import { RegistroService } from './services/usuario/registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private registroSVC:RegistroService){}
  title = 'practica-httpclient';
  public sesionIniciada:boolean = false;
  ngOnInit(): void {
    //this.sesionIniciada = this.registroSVC.usuarioLogeado;
  }
}
