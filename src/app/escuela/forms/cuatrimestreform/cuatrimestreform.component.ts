import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuatrimestre,Periodo } from 'src/app/models/escuela/cuatrimestre';
import { CuatrimestreService } from 'src/app/services/escuela/cuatrimestre.service';

@Component({
  selector: 'app-cuatrimestreform',
  templateUrl: './cuatrimestreform.component.html',
  styleUrls: ['./cuatrimestreform.component.css']
})
@Injectable()
export class CuatrimestreformComponent {
  public form!:FormGroup;
  id!:number;
  public cuatrimestre!:Cuatrimestre;
  public Periodo!:Periodo;
  public opPeriodo=[
    {id:Periodo['en-abr'],nombre:"En-Abr"},
    {id:Periodo['my-agt'],nombre:"My-Agt"},
    {id:Periodo['sept-dic'],nombre:"Sept-dic"}
  ]

  constructor(
    private cuatrimestreSVC:CuatrimestreService,
    private rutas:Router,
    private params:ActivatedRoute
  ){}
  ngOnInit():void{
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    console.log(this.buscarCuatrimestre(this.id));
    this.form=new FormGroup({
      num_cuatri:new FormControl(''),
      periodo:new FormControl('')
    });
   }
   insertarCuatrimestre(){
    this.cuatrimestre=this.form.value;
    console.log(this.cuatrimestre);
    this.cuatrimestreSVC.insertarcuatrimestre(this.cuatrimestre).subscribe(res=>{
      this.form.reset();
      this.rutas.navigate(['cuatrimestres']);
    },
    err=>{
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
    })
   }
   actualizarCuatrimestre(){
    this.cuatrimestre = this.form.value;
    console.log(this.cuatrimestre);
    this.cuatrimestreSVC.actualizarcuatrimestre(this.id,this.cuatrimestre).subscribe(res=>{
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
    }
    );
  }
   buscarCuatrimestre(id:number){
    return this.cuatrimestreSVC.buscar(id).subscribe(res=>{
      this.cuatrimestre = res;
      console.log(this.cuatrimestre);
      this.form.value.nombre = this.cuatrimestre.num_cuatri;
      this.form.value.unidad=this.cuatrimestre.periodo;
    });
   }
}
