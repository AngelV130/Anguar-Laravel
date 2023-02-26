import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/escuela/alumno';
import { AlumnoService } from 'src/app/services/escuela/alumno.service';

@Component({
  selector: 'app-alumno-tabla',
  templateUrl: './alumno-tabla.component.html',
  styleUrls: ['./alumno-tabla.component.css']
})
export class AlumnoTablaComponent {
  ALUMNOS:Alumno[]=[]
  constructor(private AlumnoSVC:AlumnoService){}
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
    })
  }
}
