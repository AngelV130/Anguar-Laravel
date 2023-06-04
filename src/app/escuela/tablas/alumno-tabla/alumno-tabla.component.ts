import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Alumno } from 'src/app/models/escuela/alumno';
import { AlumnoService } from 'src/app/services/escuela/alumno.service';
import { RegistroService } from 'src/app/services/usuario/registro.service';

@Component({
  selector: 'app-alumno-tabla',
  templateUrl: './alumno-tabla.component.html',
  styleUrls: ['./alumno-tabla.component.css']
})
export class AlumnoTablaComponent {
  ALUMNOS:Alumno[]=[]
  constructor(private AlumnoSVC:AlumnoService,private auth:RegistroService,private cookies:CookieService,private rutas:Router){}
  public autenticado:boolean = this.auth.autorizado
  public usuario:boolean = this.auth.usuario
  public error!:String;
  ngOnInit():void{
    this.obtenerAlumno();
  }
  obtenerAlumno() {
    return this.AlumnoSVC.obtenerAlumno().subscribe(res=>{
      this.ALUMNOS=res;
    })
  }
  eliminarAlumno(id:number){
    return this.AlumnoSVC.eliminarAlumno(id).subscribe(res=>{
      this.obtenerAlumno();
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
