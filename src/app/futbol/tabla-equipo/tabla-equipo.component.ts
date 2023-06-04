import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Equipo } from 'src/app/models/futbol/equipo';
import { EquipoService } from 'src/app/services/futbol/equipo.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

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

  constructor(private equipoSVC:EquipoService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
  public error!:String;
  ngOnInit(): void {
    this.obtenerEquipo();
  }
  obtenerEquipo() {
    return this.equipoSVC.obtenerEquipo().subscribe(res=>{
      this.EQUIPOS = res;
    })
  }
  eliminarEquipo(id:number){
    this.equipoSVC.eliminarEquipo(id).subscribe(res=>{
      this.obtenerEquipo();
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
