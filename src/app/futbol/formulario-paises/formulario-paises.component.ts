import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paises } from 'src/app/models/futbol/paises';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrls: ['./formulario-paises.component.css']
})
export class FormularioPaisesComponent {
  public form!: FormGroup;
  id!:number
  public pais:Paises = {id:0,nombre:""};
  constructor(private paisesSVC:PaisesService, private rutas:Router,private params:ActivatedRoute){}
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    console.log(this.buscarPais(this.id));
    this.form = new FormGroup({
      nombre: new FormControl(''),
    });
  }
  insertarPais(){
    this.pais = this.form.value;
    console.log(this.pais);
    this.paisesSVC.insertarPais(this.pais).subscribe(res=>{
      this.form.reset();
      this.rutas.navigate(['paises']);
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
    }
    );
  }
  actualizarPais(){
    this.pais = this.form.value;
    console.log(this.pais);
    this.paisesSVC.actualizarPais(this.id,this.pais).subscribe(res=>{
      this.form.reset();
      this.rutas.navigate(['paises']);
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
    }
    );
  }
  buscarPais(id:number){
    return this.paisesSVC.buscar(id).subscribe(res=>{
      this.pais = res;
      console.log(this.pais);
      this.form.value.nombre = this.pais.nombre;
    });
  }
}
