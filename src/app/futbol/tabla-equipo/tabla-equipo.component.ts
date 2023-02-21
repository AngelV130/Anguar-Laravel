import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/futbol/equipo';
import { EquipoService } from 'src/app/services/futbol/equipo.service';

@Component({
  selector: 'app-tabla-equipo',
  templateUrl: './tabla-equipo.component.html',
  styleUrls: ['./tabla-equipo.component.css']
})
export class TablaEquipoComponent {
  EQUIPOS:Equipo[] = [];
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"},
    {titulo: "Liga"}
  ];

  constructor(private equipoSVC:EquipoService){}

  ngOnInit(): void {
    this.obtenerPaises();
  }
  obtenerPaises() {
    return this.equipoSVC.obtenerEquipo().subscribe(res=>{
      this.EQUIPOS = res;
    })
  }
  eliminarEquipo(id:number){
    
  }
}
