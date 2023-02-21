import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/futbol/equipo';
import { Jugador } from 'src/app/models/futbol/jugador';
import { Paises } from 'src/app/models/futbol/paises';
import { EquipoService } from 'src/app/services/futbol/equipo.service';
import { JugadorService } from 'src/app/services/futbol/jugador.service';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-formulario-jugador',
  templateUrl: './formulario-jugador.component.html',
  styleUrls: ['./formulario-jugador.component.css']
})
export class FormularioJugadorComponent implements OnInit{
  constructor(private paisesSVC:PaisesService,private equiposSVC:EquipoService,private jugadoresSVC:JugadorService,private rutas:Router,private params:ActivatedRoute){}
  EQUIPOS!:Equipo[];
  PAISES!:Paises[];
  id!:number;
  public form!:FormGroup;
  public jugador!:Jugador;
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
      this.id = +param['id'];
    }).unsubscribe();
    console.log(this.id)
    this.buscarJugador(this.id);
    this.obtenerPaises();
    this.obtenerEquipos();
    this.form = new FormGroup({
      nombre: new FormControl('',Validators.required),
      ap_paterno: new FormControl('',Validators.required),
      ap_materno: new FormControl('',Validators.required),
      edad: new FormControl('',Validators.required),
      equipo: new FormControl('',Validators.required),
      pais: new FormControl('',Validators.required),
    });
    
  }

  insertarJugador(){
    if(Number.isNaN(this.id)){
      this.jugador = this.form.value;
      console.log(this.jugador);
      return this.jugadoresSVC.insertarJugador(this.jugador).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['jugadores']);
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
    this.jugador = this.form.value;
    console.log(this.jugador);
      return this.jugadoresSVC.actualizarJugador(this.id,this.jugador).subscribe(res=>{
        this.form.reset();
        this.rutas.navigate(['jugadores']);
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
      });
  }

  buscarJugador(id: number) {
    this.jugadoresSVC.buscar(id).subscribe(res=>{
      if(!Number.isNaN(this.id)){
        this.jugador = res;
        console.log("hola")
        console.log(this.jugador);this.form = new FormGroup({          
          nombre: new FormControl(this.jugador.nombre,Validators.required),
          ap_paterno: new FormControl(this.jugador.ap_paterno,Validators.required),
          ap_materno: new FormControl(this.jugador.ap_materno,Validators.required),
          edad: new FormControl(this.jugador.edad,Validators.required),
          equipo: new FormControl(this.jugador.equipo,Validators.required),
          pais: new FormControl(this.jugador.pais,Validators.required),
        });
      }
    })
  }
  obtenerEquipos() {
    this.equiposSVC.obtenerEquipo().subscribe(res=>{
      this.EQUIPOS = res;
    })
  }
  obtenerPaises() {
    this.paisesSVC.obtenerPaises().subscribe(res=>{
      this.PAISES = res;
    })
  }
}
