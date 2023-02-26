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
import { IniciosesionFormularioComponent } from './iniciosesion-formulario/iniciosesion-formulario.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';
import {AuthTokenGuard} from './guards/auth-token.guard';
import { AuthRolGuard } from './guards/auth-rol.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component:NavbarComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
  {path: 'paises', canActivate:[AuthRolGuard],data:{rol:[1,2,3]},component:TablaPaisesComponent},
  {path: 'paises/formulario', component:FormularioPaisesComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},
  {path: 'paises/formulario/:id', component:FormularioPaisesComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},
  
  {path: 'ligas',canActivate:[AuthRolGuard],data:{rol:[1,2,3]},component:TablaLigaComponent},
  {path: 'ligas/formulario',component:FormularioLigaComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},
  {path: 'ligas/formulario/:id',component:FormularioLigaComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},

  {path: 'equipos',canActivate:[AuthRolGuard],data:{rol:[1,2,3]},component:TablaEquipoComponent},
  {path: 'equipos/formulario',component:FormularioEquipoComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},
  {path: 'equipos/formulario/:id',component:FormularioEquipoComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},

  {path: 'jugadores',canActivate:[AuthRolGuard],data:{rol:[1,2,3]},component:TablaJugadorComponent},
  {path: 'jugadores/formulario',component:FormularioJugadorComponent,canActivate:[AuthRolGuard],data:{rol:[1,2]}},
  {path: 'jugadores/formulario/:id',component:FormularioJugadorComponent,canActivate:[AuthRolGuard],data:{rol:[1]}},

  {path: 'logging', component:IniciosesionFormularioComponent},
  {path: 'registro', component:RegistroFormularioComponent},

  {path:'materias',component:MateriaTablasComponent},
  {path:'materias/agregar',component:MateriaformComponent},
  {path:'profesores',component:ProfesorTablaComponent},
  {path:'cuatrimestres',component:CuatrimestreTablaComponent},
  {path:'alumnos',component:AlumnoTablaComponent},

  {path: "**", pathMatch: 'full', redirectTo: ''}
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
