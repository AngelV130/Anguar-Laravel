import { Component } from '@angular/core';
import { Ligas } from 'src/app/models/futbol/ligas';
import { LigaService } from 'src/app/services/futbol/liga.service';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.css']
})
export class TablaLigaComponent {
  LIGAS:Ligas[] = [];
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"},
    {titulo: "Pais"}
  ];

  constructor(private ligassSVC:LigaService){}

  ngOnInit(): void {
    this.obtenerPaises();
  }
  obtenerPaises() {
    return this.ligassSVC.obtenerLigas().subscribe(res=>{
      this.LIGAS = res;
    })
  }
  eliminarLiga(id:number){
    
  }
}
