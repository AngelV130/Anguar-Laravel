import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cuatrimestre, Periodo } from 'src/app/models/escuela/cuatrimestre';
import { CuatrimestreService } from 'src/app/services/escuela/cuatrimestre.service';

@Component({
  selector: 'app-cuatrimestreform',
  templateUrl: './cuatrimestreform.component.html',
  styleUrls: ['./cuatrimestreform.component.css']
})
export class CuatrimestreformComponent implements OnInit {
  constructor(
    private cuatrimestreSVC:CuatrimestreService,
    private rutas:Router,
    private params:ActivatedRoute,
    private cookies:CookieService
  ){}
  public form!:FormGroup;
  id!:number;
  public cuatrimestre:Cuatrimestre={id:0,num_cuatri:0,periodo:Periodo.EnAbr}
  public opcionesPeriodo = [
    { valor: Periodo.EnAbr, etiqueta: 'Enero-abril' },
    { valor: Periodo.MyAgt, etiqueta: 'Mayo-agosto' },
    { valor: Periodo.SeptDic, etiqueta: 'Septiembre-diciembre' }
  ];
  public error!:String;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id']
    }).unsubscribe();
    if(!Number.isNaN(this.id)){      
      console.log(this.id)
      this.buscarCuatrimestre(this.id)
    }
    this.form=new FormGroup({
      num_cuatri:new FormControl(''),
      periodo:new FormControl('')
    })
  }
  insertarCuatrimestre(){
    if(Number.isNaN(this.id)){
      this.cuatrimestre= this.form.value
      return this.cuatrimestreSVC.insertarcuatrimestre(this.cuatrimestre).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['cuatrimestres']);
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
      })
    }
    this.cuatrimestre= this.form.value
      return this.cuatrimestreSVC.actualizarcuatrimestre(this.id,this.cuatrimestre).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['cuatrimestres']);
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
      })
  }
  buscarCuatrimestre(id:number){
    this.cuatrimestreSVC.buscar(id).subscribe(res=>{
      if(!Number.isNaN(this.id)){
        this.cuatrimestre=res
        this.form=new FormGroup({
          num_cuatri:new FormControl(this.cuatrimestre.num_cuatri),
          periodo:new FormControl(this.cuatrimestre.periodo)
        })
      }
    })
  }
}
