import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Jugador } from 'src/app/models/futbol/jugador';
import { JugadorService } from 'src/app/services/futbol/jugador.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

@Component({
  selector: 'app-tabla-jugador',
  templateUrl: './tabla-jugador.component.html',
  styleUrls: ['./tabla-jugador.component.css']
})
export class TablaJugadorComponent {
  JUGADORES:Jugador[] = [];
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"},
    {titulo: "Ap_Paterno"},
    {titulo: "AP_Materno"},
    {titulo: "Edad"},
    {titulo: "Pais"},
    {titulo: "Liga"}
  ];

  constructor(private JugadorSVC:JugadorService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public error!:String;
  public usuario:boolean = this.auth.usuario
  ngOnInit(): void {
    this.obtenerJugadores();
  }
  obtenerJugadores() {
    return this.JugadorSVC.obtenerJugador().subscribe(res=>{
      this.JUGADORES = res;
    })
  }
  eliminarJugador(id:number){
    this.JugadorSVC.eliminarJugador(id).subscribe(res=>{
      this.obtenerJugadores();
      console.log("se elimino");
      console.log(res);
    },
    err => {
      if (err.status === 401){
        this.error = err.error;
        alert(this.error)
        this.cookies.deleteAll();
        this.rutas.navigate(['logging'])
      }
      if (err.status === 403){
        this.error = err.error;
        alert(this.error)
      }
    })    
  }
}
