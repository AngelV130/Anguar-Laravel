import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { concatAll, delay } from 'rxjs';
import { Paises } from 'src/app/models/futbol/paises';
import { PaisesService } from 'src/app/services/futbol/paises.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrls: ['./formulario-paises.component.css']
})
export class FormularioPaisesComponent {
  public form!: FormGroup;
  id!:number
  public error!:String;
  public pais:Paises = {id:0,nombre:""};
  constructor(private paisesSVC:PaisesService, private rutas:Router,private params:ActivatedRoute,private cookies:CookieService,private location:Location){}
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    if(!Number.isNaN(this.id)){
      this.buscarPais(this.id);
    }
    this.form = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
    });
  }
  insertarPais(){
    if(!Number.isNaN(this.id)){
      this.actualizarPais();
    }else{
    this.pais = this.form.value;
    console.log(this.pais);
    this.paisesSVC.insertarPais(this.pais).subscribe(res=>{
      this.form.reset();
      this.location.back()
    },
    err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          // TODO: extract errors here and match onto the form
          const validationErrors = err.error.error;
          validationErrors.forEach((prop:any) => {
            const formControl = this.form.get(prop.field);
            if (formControl) {
              // activate the error message
                formControl.setErrors({
                serverError: prop.message
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
    );}
  }
  actualizarPais(){
    this.pais = this.form.value;
    console.log(this.pais);
    this.paisesSVC.actualizarPais(this.id,this.pais).subscribe(res=>{
      this.form.reset();
      this.location.back()
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
  buscarPais(id:number){
    return this.paisesSVC.buscar(id).subscribe(res=>{
      this.pais = res;
      console.log(this.pais);
      this.form = new FormGroup({
        nombre: new FormControl(this.pais.nombre,[Validators.required]),
      });
    });
  }
}
