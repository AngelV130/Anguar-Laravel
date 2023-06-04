import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Alumno } from 'src/app/models/escuela/alumno';
import { Cuatrimestre } from 'src/app/models/escuela/cuatrimestre';
import { AlumnoService } from 'src/app/services/escuela/alumno.service';
import { CuatrimestreService } from 'src/app/services/escuela/cuatrimestre.service';

@Component({
  selector: 'app-alumnoform',
  templateUrl: './alumnoform.component.html',
  styleUrls: ['./alumnoform.component.css']
})
export class AlumnoformComponent implements OnInit {
  constructor(
    private cuatrimestreSVC:CuatrimestreService,
    private alumnoSVC:AlumnoService,
    private rutas:Router,
    private params:ActivatedRoute,
    private cookies:CookieService
    ){}
    public error!:String;
    CUATRIMESTRES!:Cuatrimestre[];
    id!:number;
    public form!:FormGroup;
    public alumno!:Alumno;
  ngOnInit(): void {
    this.params.params.subscribe(params=>{
      this.id = +params['id']
    }).unsubscribe();
    console.log(this.id)
    if(!Number.isNaN(this.id)){
      this.buscarAlumno(this.id);
    }
    this.obtenerCuatrimestre();
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required),
      ap_paterno: new FormControl('',Validators.required),
      ap_materno: new FormControl('',Validators.required),
      correo:new FormControl('',Validators.required),
      cuatri_id:new FormControl('',Validators.required)
    })
  }

  insertarAlumno(){
    if(Number.isNaN(this.id)){
      this.alumno=this.form.value;
      console.log(this.alumno);
      return this.alumnoSVC.insertarAlumno(this.alumno).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['alumnos']);
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
      )
    }
    this.alumno=this.form.value;
      console.log(this.alumno);
      return this.alumnoSVC.actualizarAlumno(this.id,this.alumno).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['alumnos']);
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
      )
  }

  buscarAlumno(id: number) {
   this.alumnoSVC.buscar(id).subscribe(res=>{
    if(!Number.isNaN(this.id)){
      this.alumno=res;
      console.log("hola")
      console.log(this.alumno)
      this.form=new FormGroup({
        nombre: new FormControl(this.alumno.nombre,Validators.required),
        ap_paterno: new FormControl(this.alumno.ap_paterno,Validators.required),
        ap_materno: new FormControl(this.alumno.ap_materno,Validators.required),
        correo:new FormControl(this.alumno.correo,Validators.required),
        cuatri_id:new FormControl(this.alumno.cuatri_id,Validators.required)
      })
    }
   })
  }
  obtenerCuatrimestre() {
    this.cuatrimestreSVC.obtenercuatrimestres().subscribe(res=>{
      this.CUATRIMESTRES=res
    })
  }
}
