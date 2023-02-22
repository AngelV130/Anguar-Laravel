import { Component } from '@angular/core';
import { materias } from 'src/app/models/escuela/materias';
import { MateriaService } from 'src/app/services/escuela/materia.service';


@Component({
  selector: 'app-materia-tablas',
  templateUrl: './materia-tablas.component.html',
  styleUrls: ['./materia-tablas.component.css']
})
export class MateriaTablasComponent{
  MATERIAS:materias[]=[]
  columnas=[
    {titulo:"Id"},
    {titulo:"Nombre"},
    {titulo:"Unidades"}
  ]
  constructor(private materiaSVC:MateriaService){}
  ngOnInit(): void {
    this.obtenerMaterias();
  }
  obtenerMaterias() {
    this.materiaSVC.obtenerMaterias().subscribe(res=>{
      this.MATERIAS=res
    })
  }
  eliminarMateria(id:number){
    this.materiaSVC.eliminarMateria(id).subscribe(res=>{
      this.obtenerMaterias();
      console.log("se elimino");
      console.log(res);
    })
  }
}
