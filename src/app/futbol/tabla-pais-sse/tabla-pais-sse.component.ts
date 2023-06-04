import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { timeInterval } from 'rxjs';
import { Paises } from 'src/app/models/futbol/paises';
import { PaisesService } from 'src/app/services/futbol/paises.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

@Component({
  selector: 'app-tabla-pais-sse',
  templateUrl: './tabla-pais-sse.component.html',
  styleUrls: ['./tabla-pais-sse.component.css']
})
export class TablaPaisSseComponent {
  constructor(private paisesSVC:PaisesService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  PAISES:Paises[] = [];
  public usuario:boolean = this.auth.usuario
  public error!:String;
  public autenticado:boolean = this.auth.autorizado
  columnas = [
    {titulo: "Id"},
    {titulo: "Nombre"}
  ];
  public interval = setInterval(()=>{this.obtenerPaises()},3000);

  ngOnInit(): void {
    this.obtenerPaises()
    this.interval
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
  ngOnDestroy(): void {setTimeout(() => {
    clearInterval(this.interval);
  }, 5000);
  }
}
