import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'registro', component:RegistroFormularioComponent}
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
