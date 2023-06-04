import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cuatrimestre } from 'src/app/models/escuela/cuatrimestre';
import { CuatrimestreService } from 'src/app/services/escuela/cuatrimestre.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

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
  
  constructor(private cuatrimestreSVC:CuatrimestreService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
  public error!:String;

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
