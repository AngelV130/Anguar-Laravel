import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Profesor } from 'src/app/models/escuela/profesor';
import { ProfesorService } from 'src/app/services/escuela/profesor.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

@Component({
  selector: 'app-profesor-tabla',
  templateUrl: './profesor-tabla.component.html',
  styleUrls: ['./profesor-tabla.component.css']
})
export class ProfesorTablaComponent implements OnInit{
  PROFESORES!:Profesor[];
  constructor(private profesorSVC:ProfesorService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
  public error!:String;
  ngOnInit(): void {
    this.obtenerProfesores();
  }
  obtenerProfesores(){
    return this.profesorSVC.obtenerProfesores().subscribe(res=>{
      this.PROFESORES=res
      console.log(res);
    },err=>{
      console.log(err)
    })
  }
  eliminarProfesor(id:number){
    this.profesorSVC.eliminarProfesor(id).subscribe(res=>{
      this.obtenerProfesores();
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
