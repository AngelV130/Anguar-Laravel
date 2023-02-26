import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/escuela/profesor';
import { ProfesorService } from 'src/app/services/escuela/profesor.service';

@Component({
  selector: 'app-profesor-tabla',
  templateUrl: './profesor-tabla.component.html',
  styleUrls: ['./profesor-tabla.component.css']
})
export class ProfesorTablaComponent implements OnInit{
  PROFESORES!:Profesor[];
  constructor(private profesorSVC:ProfesorService){}
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
    })
  }
}
