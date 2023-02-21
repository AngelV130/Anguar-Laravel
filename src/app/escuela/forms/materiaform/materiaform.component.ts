import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { materias } from 'src/app/models/escuela/materias';
import { MateriaService } from 'src/app/services/escuela/materia.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-materiaform',
  templateUrl: './materiaform.component.html',
  styleUrls: ['./materiaform.component.css']
})
@Injectable()
export class MateriaformComponent {
  form: FormGroup;
  materia?: materias;

  constructor(
    private fb:FormBuilder,
    private materiaService:MateriaService,
    private location: Location
  ){
    this.form=this.fb.group({
      nombre:['',Validators.required],
      unidad:['',Validators.required]
    })
  }
  OnSubmit(values: materias){
    this.materiaService.addMateria(values).subscribe();
    this.form.reset();
    this.location.back();
  }

}
