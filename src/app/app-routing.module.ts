import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaformComponent } from './escuela/forms/materiaform/materiaform.component';
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

  {path:'materias',component:MateriaTablasComponent},
  {path:'materias/agregar',component:MateriaformComponent},
  {path:'profesores',component:ProfesorTablaComponent},
  {path:'cuatrimestres',component:CuatrimestreTablaComponent},
  {path:'alumnos',component:AlumnoTablaComponent}
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
