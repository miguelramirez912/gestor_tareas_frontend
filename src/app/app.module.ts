import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { ResponsablesComponent } from './components/responsables/responsables.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { IngresarTareaComponent } from './components/ingresar-tarea/ingresar-tarea.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTareaComponent } from './components/actualizar-tarea/actualizar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ResponsablesComponent,
    NavbarComponent,
    IngresarTareaComponent,
    ActualizarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
