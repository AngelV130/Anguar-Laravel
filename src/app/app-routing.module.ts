import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoformComponent } from './escuela/forms/alumnoform/alumnoform.component';
import { CuatrimestreformComponent } from './escuela/forms/cuatrimestreform/cuatrimestreform.component';
import { MateriaformComponent } from './escuela/forms/materiaform/materiaform.component';
import { ProfesorformComponent } from './escuela/forms/profesorform/profesorform.component';
import { AlumnoTablaComponent } from './escuela/tablas/alumno-tabla/alumno-tabla.component';
import { CuatrimestreTablaComponent } from './escuela/tablas/cuatrimestre-tabla/cuatrimestre-tabla.component';
import { MateriaTablasComponent } from './escuela/tablas/materia-tablas/materia-tablas.component';
import { ProfesorTablaComponent } from './escuela/tablas/profesor-tabla/profesor-tabla.component';
import { FormularioEquipoComponent } from './futbol/formulario-equipo/formulario-equipo.component';
import { FormularioJugadorComponent } from './futbol/formulario-jugador/formulario-jugador.component';
import { FormularioLigaComponent } from './futbol/formulario-liga/formulario-liga.component';
import { FormularioPaisesComponent } from './futbol/formulario-paises/formulario-paises.component';
import { TablaEquipoComponent } from './futbol/tabla-equipo/tabla-equipo.component';
import { TablaJugadorComponent } from './futbol/tabla-jugador/tabla-jugador.component';
import { TablaLigaComponent } from './futbol/tabla-liga/tabla-liga.component';
import { TablaPaisesComponent } from './futbol/tabla-paises/tabla-paises.component';
import { IniciosesionFormularioComponent } from './iniciosesion-formulario/iniciosesion-formulario.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';

const routes: Routes = [
  {path: 'paises', component:TablaPaisesComponent},
  {path: 'paises/formulario', component:FormularioPaisesComponent},
  {path: 'paises/formulario/:id', component:FormularioPaisesComponent},
  {path: 'ligas',component:TablaLigaComponent},
  {path: 'ligas/formulario',component:FormularioLigaComponent},
  {path: 'ligas/formulario/:id',component:FormularioLigaComponent},
  {path: 'equipos',component:TablaEquipoComponent},
  {path: 'equipos/formulario',component:FormularioEquipoComponent},
  {path: 'equipos/formulario/:id',component:FormularioEquipoComponent},
  {path: 'jugadores',component:TablaJugadorComponent},
  {path: 'jugadores/formulario',component:FormularioJugadorComponent},
  {path: 'jugadores/formulario/:id',component:FormularioJugadorComponent},
  {path: 'logging', component:IniciosesionFormularioComponent},
  {path: 'registro', component:RegistroFormularioComponent},
  {path:'materias',component:MateriaTablasComponent},
  {path:'materias/agregar',component:MateriaformComponent},
  {path:'materias/actualizar/:id',component:MateriaformComponent},
  {path:'profesores',component:ProfesorTablaComponent},
  {path:'profesores/agregar',component:ProfesorformComponent},
  {path:'profesores/actualizar/:id',component:ProfesorformComponent},
  {path:'cuatrimestres',component:CuatrimestreTablaComponent},
  {path:'cuatrimestres/agregar',component:CuatrimestreformComponent},
  {path:'cuatrimestre/actualizar/:id',component:CuatrimestreformComponent},
  {path:'alumnos',component:AlumnoTablaComponent},
  {path:'alumnos/agregar',component:AlumnoformComponent},
  {path:'alumnos/actualizar/:id',component:AlumnoformComponent}
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
