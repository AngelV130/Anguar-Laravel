import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { materias } from 'src/app/models/escuela/materias';
import { MateriaService } from 'src/app/services/escuela/materia.service';


@Component({
  selector: 'app-materiaform',
  templateUrl: './materiaform.component.html',
  styleUrls: ['./materiaform.component.css']
})
@Injectable()
export class MateriaformComponent {
  constructor(private materiaSVC:MateriaService, private rutas:Router,
    private params:ActivatedRoute,private cookies:CookieService){}
 public form!:FormGroup;
 id!:number;
 public materia:materias={id:0,nombre:"",unidades:0}
 public error!:String;
 ngOnInit():void{
  this.params.params.subscribe(param=>{
    this.id = +param['id'];
  }).unsubscribe();
  if(!Number.isNaN(this.id)){
    this.buscarMateria(this.id)
  }
  console.log(this.buscarMateria(this.id));
  this.form=new FormGroup({
    nombre:new FormControl(''),
    unidades:new FormControl('')
  })
 }
 insertarMateria(){
  if(Number.isNaN(this.id)){
    this.materia=this.form.value;
    console.log(this.materia);
    this.materiaSVC.insertarMateria(this.materia).subscribe(res=>{
      this.form.reset();
      this.rutas.navigate(['materias']);
    },
    err=>{
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          // TODO: extract errors here and match onto the form
          const validationErrors = err.error.Error;
          Object.keys(validationErrors).forEach(prop => {
            const formControl = this.form.get(prop);
            if (formControl) {
              // activate the error message
                formControl.setErrors({
                serverError: validationErrors[prop]
              });
            }
          });
        }
        if (err.status === 401){
          this.error = err.error;
          alert(this.error)
          this.cookies.deleteAll();
          this.rutas.navigate(['logging'])
        }
        if (err.status === 403){
          this.error = err.error;
          alert(this.error)
          this.rutas.navigate([''])
        }
      }
    })
  }else{  
    this.materia = this.form.value;
    console.log(this.materia);
    this.materiaSVC.actualizarMateria(this.id,this.materia).subscribe(res=>{
      this.form.reset();
      this.rutas.navigate(['materias']);
    },
    err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          // TODO: extract errors here and match onto the form
          const validationErrors = err.error.Error;
          Object.keys(validationErrors).forEach(prop => {
            const formControl = this.form.get(prop);
            if (formControl) {
              // activate the error message
                formControl.setErrors({
                serverError: validationErrors[prop]
              });
            }
          });
        }
        if (err.status === 401){
          this.error = err.error;
          alert(this.error)
          this.cookies.deleteAll();
          this.rutas.navigate(['logging'])
        }
        if (err.status === 403){
          this.error = err.error;
          alert(this.error)
          this.rutas.navigate([''])
        }
      }
    })
  }
 }
 buscarMateria(id:number){
  return this.materiaSVC.buscar(id).subscribe(res=>{
    this.materia = res;
    console.log(this.materia);
    this.form=new FormGroup({
      nombre:new FormControl(this.materia.nombre),
      unidades:new FormControl(this.materia.unidades)
    })
  });
 }

}
