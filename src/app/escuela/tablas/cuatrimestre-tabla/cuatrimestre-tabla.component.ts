import { Component } from '@angular/core';
import { Cuatrimestre } from 'src/app/models/escuela/cuatrimestre';
import { CuatrimestreService } from 'src/app/services/escuela/cuatrimestre.service';

@Component({
  selector: 'app-cuatrimestre-tabla',
  templateUrl: './cuatrimestre-tabla.component.html',
  styleUrls: ['./cuatrimestre-tabla.component.css']
})
export class CuatrimestreTablaComponent {
  CUATRIMESTRES:Cuatrimestre[]=[]
  ngOnInit(): void {
    this.obtenerCuatrimestre();
  }
  
  constructor(private cuatrimestreSVC:CuatrimestreService){}

  obtenerCuatrimestre(){
    this.cuatrimestreSVC.obtenercuatrimestres().subscribe(res=>{
      this.CUATRIMESTRES=res
    })
  }
  eliminarMateria(id:number){
    this.cuatrimestreSVC.eliminarcuatrimestre(id).subscribe(res=>{
      this.obtenerCuatrimestre();
      console.log("se elimino");
      console.log(res);
    })
  }

}
