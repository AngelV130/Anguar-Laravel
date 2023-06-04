import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Equipo } from 'src/app/models/futbol/equipo';
import { Ligas } from 'src/app/models/futbol/ligas';
import { EquipoService } from 'src/app/services/futbol/equipo.service';
import { LigaService } from 'src/app/services/futbol/liga.service';

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.component.html',
  styleUrls: ['./formulario-equipo.component.css']
})
export class FormularioEquipoComponent implements OnInit {
  constructor (private ligaSVC:LigaService,private equipoSVC:EquipoService,private rutas:Router,private params:ActivatedRoute,private cookies:CookieService){}
  LIGAS!:Ligas[];
  id!:number;
  public error!:String;
  public form!: FormGroup;
  public equipo!:Equipo;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    if(!Number.isNaN(this.id)){
      console.log(this.id);
      this.buscarEquipo(this.id);
    }
    this.obtenerLigas();
    this.form = new FormGroup({
      nombre: new FormControl('',Validators.required),
      liga: new FormControl('',Validators.required),
    });
  }

  insertarEquipo(){
    if(Number.isNaN(this.id)){
      this.equipo = this.form.value;
      console.log(this.equipo);
      return this.equipoSVC.insertarEquipo(this.equipo).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['equipos']);
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
    this.equipo = this.form.value;
    console.log(this.equipo);
      return this.equipoSVC.actualizarEquipo(this.id,this.equipo).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['equipos']);
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

  obtenerLigas(){
    this.ligaSVC.obtenerLigas().subscribe(res=>{
      this.LIGAS = res;
      console.log(this.LIGAS);
    })
  }  
  buscarEquipo(id: number) {
    this.equipoSVC.buscar(id).subscribe(res=>{
      if(!Number.isNaN(this.id)){
        this.equipo = res;
        console.log("hola")
        console.log(this.equipo);
        this.form = new FormGroup({
          nombre: new FormControl(this.equipo.nombre),
          liga: new FormControl(this.equipo.liga),
        });
      }
    })
  }
}
