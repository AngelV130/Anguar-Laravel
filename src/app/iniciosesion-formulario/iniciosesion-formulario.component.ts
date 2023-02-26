import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { RegistroService } from '../services/usuario/registro.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciosesion-formulario',
  templateUrl: './iniciosesion-formulario.component.html',
  styleUrls: ['./iniciosesion-formulario.component.css']
})
export class IniciosesionFormularioComponent implements OnInit{
  constructor(private registroSVC:RegistroService,private cookiesSVC:CookieService,private rutas:Router){}
  public usuario!:Usuario;
  public form!:FormGroup;
  public error:boolean = false;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
  }


  mandarDatos(){
    this.usuario = this.form.value;
    this.registroSVC.iniciarSesion(this.usuario).subscribe(res=>{
      this.error = false;
      this.cookiesSVC.set("ACCESS_TOKEN",res.access_token.toString())
      console.log(this.cookiesSVC.get("ACCESS_TOKEN"));
      this.rutas.navigate([''])
    },err=>{
      if (err instanceof HttpErrorResponse) {
        if(err.status === 401){
          this.error = true;
        }
        if (err.status === 400) {
          // TODO: extract errors here and match onto the form
          const validationErrors = err.error;
          console.log(validationErrors)
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
    })
  }
}

