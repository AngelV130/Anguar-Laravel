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
import {AuthTokenGuard} from './guards/auth-token.guard';
import { AuthRolGuard } from './guards/auth-rol.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidarCodigoComponent } from './validar-codigo/validar-codigo.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosTablaComponent } from './usuarios-tabla/usuarios-tabla.component';
import { TablaPaisSseComponent } from './futbol/tabla-pais-sse/tabla-pais-sse.component';
import { BarcoComponent } from './Juego/barco/barco.component';
import { BatallaNavalComponent } from './Juego/batalla-naval/batalla-naval.component';

const routes: Routes = [
  {path: '',component:NavbarComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},

  {path: 'paises', canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2,3]},component:TablaPaisSseComponent},
  {path: 'paises/formulario', component:FormularioPaisesComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2]}},
  {path: 'paises/formulario/:id', component:FormularioPaisesComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1]}},
  
  {path: 'ligas',canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2,3]},component:TablaLigaComponent},
  {path: 'ligas/formulario',component:FormularioLigaComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2]}},
  {path: 'ligas/formulario/:id',component:FormularioLigaComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1]}},

  {path: 'equipos',canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2,3]},component:TablaEquipoComponent},
  {path: 'equipos/formulario',component:FormularioEquipoComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2]}},
  {path: 'equipos/formulario/:id',component:FormularioEquipoComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1]}},

  {path: 'jugadores',canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2,3]},component:TablaJugadorComponent},
  {path: 'jugadores/formulario',component:FormularioJugadorComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1,2]}},
  {path: 'jugadores/formulario/:id',component:FormularioJugadorComponent,canActivate:[AuthRolGuard,AuthTokenGuard],data:{rol:[1]}},

  {path: 'logging', component:IniciosesionFormularioComponent},
  {path: 'registro', component:RegistroFormularioComponent},
  {path: 'verificar/:id',component:ValidarCodigoComponent},
  {path: 'usuarios/:id',component:UsuariosFormComponent,data:{rol:[1]},canActivate:[AuthRolGuard,AuthTokenGuard]},
  {path: 'usuarios',component:UsuariosTablaComponent,data:{rol:[1]},canActivate:[AuthRolGuard,AuthTokenGuard]},
  
  {path:'materias',component:MateriaTablasComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
  {path:'materias/agregar',component:MateriaformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2]}},
  {path:'materias/actualizar/:id',component:MateriaformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1]}},

  {path:'profesores',component:ProfesorTablaComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
  {path:'profesores/agregar',component:ProfesorformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2]}},
  {path:'profesores/actualizar/:id',component:ProfesorformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1]}},

  {path:'cuatrimestres',component:CuatrimestreTablaComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
  {path:'cuatrimestres/agregar',component:CuatrimestreformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2]}},
  {path:'cuatrimestres/actualizar/:id',component:CuatrimestreformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1]}},

  {path:'alumnos',component:AlumnoTablaComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
  {path:'alumnos/agregar',component:AlumnoformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2]}},
  {path:'alumnos/actualizar/:id',component:AlumnoformComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1]}},

  {path:'barco',component:BarcoComponent},
  {path:'batalla',component:BatallaNavalComponent},
  {path:'paises/sse',component:TablaPaisesComponent,canActivate:[AuthTokenGuard,AuthRolGuard],data:{rol:[1,2,3]}},
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
