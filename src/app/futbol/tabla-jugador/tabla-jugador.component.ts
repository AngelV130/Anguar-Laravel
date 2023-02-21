import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/futbol/jugador';
import { JugadorService } from 'src/app/services/futbol/jugador.service';

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

  constructor(private JugadorSVC:JugadorService){}

  ngOnInit(): void {
    this.obtenerPaises();
  }
  obtenerPaises() {
    return this.JugadorSVC.obtenerJugador().subscribe(res=>{
      this.JUGADORES = res;
    })
  }
  eliminarJugador(id:number){
    
  }
}
