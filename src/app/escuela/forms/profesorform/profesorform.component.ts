import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaService } from 'src/app/services/escuela/materia.service';
import { ProfesorService } from 'src/app/services/escuela/profesor.service';
import { materias } from 'src/app/models/escuela/materias';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profesor } from 'src/app/models/escuela/profesor';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profesorform',
  templateUrl: './profesorform.component.html',
  styleUrls: ['./profesorform.component.css']
})
export class ProfesorformComponent implements OnInit {
  constructor(private profesorSVC:ProfesorService,private materiaSVC:MateriaService,private rutas:Router,private params:ActivatedRoute,private cookies:CookieService){}
  MATERIAS!:materias[];
  id!:number;
  public form!:FormGroup;
  public profesor!:Profesor;
  public error!:String;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    });
    if(!Number.isNaN(this.id)){
      console.log(this.id)
      this.buscarProfesor(this.id);
    }
    this.obtenerMaterias();
    this.form = new FormGroup({
      nombre:new FormControl('',Validators.required),
      ap_paterno: new FormControl('',Validators.required),
      ap_materno: new FormControl('',Validators.required),
      correo:new FormControl('',Validators.required),
      materia_id:new FormControl('',Validators.required)
  });
}

  insertarProfesor(){
    if(Number.isNaN(this.id)){
      this.profesor = this.form.value;
      console.log(this.profesor);
      return this.profesorSVC.insertarProfesor(this.profesor).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['profesores']);
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
      }
      );
    }
    this.profesor = this.form.value;
    console.log(this.profesor);
      return this.profesorSVC.actualizarProfesor(this.id,this.profesor).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['profesores']);
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
      });
  }

  buscarProfesor(id: number) {
    this.profesorSVC.buscar(id).subscribe(res=>{
      if(!Number.isNaN(this.id)){
        this.profesor = res;
        console.log(this.profesor.materia_id)
        console.log(this.profesor);this.form = new FormGroup({          
          nombre: new FormControl(this.profesor.nombre,Validators.required),
          ap_paterno: new FormControl(this.profesor.ap_paterno,Validators.required),
          ap_materno: new FormControl(this.profesor.ap_materno,Validators.required),
          correo: new FormControl(this.profesor.correo,Validators.required),
          materia_id:new FormControl(this.profesor.materia_id,Validators.required)
        });
      }
    })
  }
  obtenerMaterias() {
    this.materiaSVC.obtenerMaterias().subscribe(res=>{
      this.MATERIAS = res;
    })
  }
}
