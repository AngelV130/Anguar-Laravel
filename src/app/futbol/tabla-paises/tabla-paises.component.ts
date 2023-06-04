import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable, of, subscribeOn } from 'rxjs';
import { Paises } from 'src/app/models/futbol/paises';
import { PaisesService } from 'src/app/services/futbol/paises.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  constructor(private paisesSVC:PaisesService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  PAISES:Paises[] = [];
  public alert = new Observable<boolean>((sub)=>sub.next(false));
  public usuario:boolean = this.auth.usuario
  public error!:String;
  public autenticado:boolean = this.auth.autorizado
  
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"}
  ];

  ngOnInit(): void {
    this.obtenerPaises()
    this.sse()
  }

  insertarPais(pais:Paises){
    this.paisesSVC.insertarPais(pais).subscribe(res=>{
      this.obtenerPaises();
    })
  }
  obtenerPaises(){
    this.paisesSVC.obtenerPaises().subscribe(res=>{
      this.PAISES = res;
    })
  }
  sse(){
    this.paisesSVC.pruebasse(9).subscribe(res=>{
      console.log(res)
      if( res == "Tabla Pais modifcada"){        
        this.alert = of(true)
        this.obtenerPaises()
      }
    })
  }
  eliminarPais(id:number){
    this.paisesSVC.eliminarPais(id).subscribe(res=>{
      console.log("se elimino");
      console.log(res);
      this.obtenerPaises()
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
  cerrarAlerta(){
    this.alert = of(false)
  }
}
