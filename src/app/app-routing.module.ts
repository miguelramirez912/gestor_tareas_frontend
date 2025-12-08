import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { ResponsablesComponent } from './components/responsables/responsables.component';
import { IngresarTareaComponent } from './components/ingresar-tarea/ingresar-tarea.component';
import { ActualizarTareaComponent } from './components/actualizar-tarea/actualizar-tarea.component';

const routes: Routes = [
  {path: 'tareas', component: TareasComponent},
  {path: '', redirectTo: 'tareas', pathMatch: 'full'},
  {path: 'ingresar-tarea', component: IngresarTareaComponent},
  {path: 'responsables', component: ResponsablesComponent},
  {path: 'actualizar-tarea/:id', component: ActualizarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
