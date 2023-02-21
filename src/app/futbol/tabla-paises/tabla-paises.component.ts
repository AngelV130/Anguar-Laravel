import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/models/futbol/paises';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  PAISES:Paises[] = [];
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"}
  ];

  constructor(private paisesSVC:PaisesService){}

  ngOnInit(): void {
    this.obtenerPaises();
  }

  insertarPais(pais:Paises){
    this.paisesSVC.insertarPais(pais).subscribe(res=>{
      this.obtenerPaises();
    })
  }
  obtenerPaises(){
    this.paisesSVC.obtenerPaises().subscribe(res=>{
      this.PAISES = res;
    });
  }
  actualizarPais(id:number){
    
  }
  eliminarPais(id:number){
    this.paisesSVC.eliminarPais(id).subscribe(res=>{
      this.obtenerPaises();
      console.log("se elimino");
      console.log(res);
    })
  }
}
