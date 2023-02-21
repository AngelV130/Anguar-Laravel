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
    FormularioJugadorComponent
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
