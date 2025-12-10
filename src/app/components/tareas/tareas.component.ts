import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  @ViewChild('exito') exito!: SwalComponent; 

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
      Swal.fire({
              title: '¿Estás seguro de que deseas eliminar este registro?',
              text: 'No podrás revertir esta acción',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sí, eliminar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.isConfirmed) {
                this.tareaService.deleteTarea(tarea.id).subscribe(response => {
                  this.exito.fire();
                  this.tareas = this.tareas.filter(tar => tar != tarea);
                })
              }
            });
      }

    editarTarea(tarea:Tarea){
      this.tareaService.getTarea(tarea.id).subscribe(response => {
        console.log(response);
      })
      this.router.navigate(['/actualizar-tarea', tarea.id]);
    }
  }

