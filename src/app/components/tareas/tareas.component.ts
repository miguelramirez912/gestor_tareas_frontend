import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas!:Tarea[];

  constructor(private tareaService: TareaService, private router: Router){}

    ngOnInit(): void {
      this.obtenerTareas();
    }

    obtenerTareas(){
      this.tareaService.obtenerListaDeTareas().subscribe(listaDeTareas => {
        console.log(listaDeTareas);
        this.tareas = listaDeTareas;
      })
    }

    eliminarTarea(tarea:Tarea): void{
      if (confirm("Esta seguro de eliminar esta tarea?")) {
        this.tareaService.deleteTarea(tarea.id).subscribe(response => {
        this.tareas = this.tareas.filter(tar => tar != tarea)
      })
    }}

    editarTarea(tarea:Tarea){
      this.tareaService.getTarea(tarea.id).subscribe(response => {
        console.log(response);
      })
      this.router.navigate(['/actualizar-tarea', tarea.id]);
    }
  }

