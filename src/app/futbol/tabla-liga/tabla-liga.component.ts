import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ligas } from 'src/app/models/futbol/ligas';
import { LigaService } from 'src/app/services/futbol/liga.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

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

  constructor(private ligassSVC:LigaService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public error!:String;
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
  ngOnInit(): void {
    this.obtenerLigas();
  }
  obtenerLigas() {
    return this.ligassSVC.obtenerLigas().subscribe(res=>{
      this.LIGAS = res;
    })
  }
  eliminarLiga(id:number){
    this.ligassSVC.eliminarLiga(id).subscribe(res=>{
      this.obtenerLigas();
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
