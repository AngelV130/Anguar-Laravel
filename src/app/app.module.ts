import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaPaisesComponent } from './futbol/tabla-paises/tabla-paises.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormularioPaisesComponent } from './futbol/formulario-paises/formulario-paises.component';
import { TablaLigaComponent } from './futbol/tabla-liga/tabla-liga.component';
import { TablaEquipoComponent } from './futbol/tabla-equipo/tabla-equipo.component';
import { TablaJugadorComponent } from './futbol/tabla-jugador/tabla-jugador.component';
import { FormularioLigaComponent } from './futbol/formulario-liga/formulario-liga.component';
import { FormularioEquipoComponent } from './futbol/formulario-equipo/formulario-equipo.component';
import { FormularioJugadorComponent } from './futbol/formulario-jugador/formulario-jugador.component';
import { MateriaTablasComponent } from './escuela/tablas/materia-tablas/materia-tablas.component';
import { MateriaformComponent } from './escuela/forms/materiaform/materiaform.component';
import { ProfesorTablaComponent } from './escuela/tablas/profesor-tabla/profesor-tabla.component';
import { ProfesorformComponent } from './escuela/forms/profesorform/profesorform.component';
import { AlumnoTablaComponent } from './escuela/tablas/alumno-tabla/alumno-tabla.component';
import { AlumnoformComponent } from './escuela/forms/alumnoform/alumnoform.component';
import { CuatrimestreTablaComponent } from './escuela/tablas/cuatrimestre-tabla/cuatrimestre-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaPaisesComponent,
    FormularioPaisesComponent,
    TablaLigaComponent,
    TablaEquipoComponent,
    TablaJugadorComponent,
    FormularioLigaComponent,
    FormularioEquipoComponent,
    FormularioJugadorComponent,
    MateriaTablasComponent,
    MateriaformComponent,
    ProfesorTablaComponent,
    ProfesorformComponent,
    AlumnoTablaComponent,
    AlumnoformComponent,
    CuatrimestreTablaComponent,
    CuatrimestreTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
