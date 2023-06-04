import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html',
  styleUrls: ['./validar-codigo.component.css']
})
export class ValidarCodigoComponent implements OnInit{
  constructor (private codigoSVC:RegistroService,private rutas:Router,private cookies:CookieService,private params:ActivatedRoute){}
  public form!: FormGroup;
  public id!:number;
  public error!:String;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    this.form = new FormGroup({
      code: new FormControl('',[Validators.required])
    });
  }
  enviarCodigo(){
    this.codigoSVC.enviarCodigo(this.form.value.code,this.id).subscribe(res=>{
      this.codigoSVC.login = true;
      alert('se activo su cuenta');
      this.rutas.navigate(['logging']);
    },err=>{
      console.log(err.error)
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          // TODO: extract errors here and match onto the form
          const validationErrors = err.error;
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
        }
      }
    });
  }
}
