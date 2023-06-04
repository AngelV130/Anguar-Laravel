import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { materias } from 'src/app/models/escuela/materias';
import { MateriaService } from 'src/app/services/escuela/materia.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';


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
  public error!:String;
  constructor(private materiaSVC:MateriaService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
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
