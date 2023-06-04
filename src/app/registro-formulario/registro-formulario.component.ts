import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../models/usuario';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit{
  constructor(private registroSVC:RegistroService,private route:Router,private cookiesSVC:CookieService){}
  public usuario!:Usuario;
  public form!:FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      telefono: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      password: new FormControl('',Validators.required),
    });
  }


  mandarDatos(){
    this.usuario = this.form.value;
    console.log(this.usuario)
    return this.registroSVC.registrarUusario(this.usuario).subscribe(res=>{
        console.log(res.id);
        this.route.navigate(['logging']);
      },err=>{  
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            // TODO: extract errors here and match onto the form
            const validationErrors = err.error.Error;
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
      });
  }
  mandarRegistro(){
    this.route.navigate(['logging']);
  }
}
