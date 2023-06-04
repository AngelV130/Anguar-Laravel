import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ligas } from 'src/app/models/futbol/ligas';
import { Paises } from 'src/app/models/futbol/paises';
import { LigaService } from 'src/app/services/futbol/liga.service';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-formulario-liga',
  templateUrl: './formulario-liga.component.html',
  styleUrls: ['./formulario-liga.component.css']
})
export class FormularioLigaComponent implements OnInit {
  constructor (private paisesSVC:PaisesService,private ligaSVC:LigaService,private rutas:Router,private params:ActivatedRoute,private cookies:CookieService){}
  PAISES!:Paises[];
  id!:number;
  public error!:String;
  public form!: FormGroup;
  public liga!:Ligas;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    if(!Number.isNaN(this.id)){
      this.buscarLiga(this.id);
    }
    this.obtenerPaises();
    this.form = new FormGroup({
      nombre: new FormControl('',Validators.required),
      pais: new FormControl('',Validators.required),
    });
  }

  insertarLiga(){
    if(Number.isNaN(this.id)){
      this.liga = this.form.value;
      console.log(this.liga);
      return this.ligaSVC.insertarLiga(this.liga).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['ligas']);
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
    this.liga = this.form.value;
    console.log(this.liga);
      return this.ligaSVC.actualizarLiga(this.id,this.liga).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['ligas']);
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

  actualizarLiga(){
    
  }

  obtenerPaises(){
    this.paisesSVC.obtenerPaises().subscribe(res=>{
      this.PAISES = res;
      console.log(this.PAISES);
    })
  }  
  buscarLiga(id: number) {
    this.ligaSVC.buscar(id).subscribe(res=>{
      if(!Number.isNaN(this.id)){
        this.liga = res;
        console.log("hola")
        console.log(this.liga);this.form = new FormGroup({
          nombre: new FormControl(this.liga.nombre),
          pais: new FormControl(this.liga.pais),
        });
      }
    })
  }
}

