import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { materias } from 'src/app/models/escuela/materias';
import { MateriaService } from 'src/app/services/escuela/materia.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-materia-tablas',
  templateUrl: './materia-tablas.component.html',
  styleUrls: ['./materia-tablas.component.css']
})
export class MateriaTablasComponent implements OnInit {
  materias: materias[] = [];
  subcription?:Subscription;

  constructor(private materiaService:MateriaService){}
  ngOnInit():void{
    this.getMaterias();
    this.subcription=this.materiaService.get_refresh$().subscribe(()=>{
      this.getMaterias();
    })
  }
  getMaterias() {
    this.materiaService.getMaterias().subscribe(data=>this.materias=data);
  }
}
