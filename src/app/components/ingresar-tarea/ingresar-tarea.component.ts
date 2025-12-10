import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Estado } from 'src/app/enums/estado';
import { Prioridad } from 'src/app/enums/prioridad';
import { Proyecto } from 'src/app/models/interfaces/proyecto';
import { Responsable } from 'src/app/models/responsable';
import { Tarea } from 'src/app/models/tarea';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-ingresar-tarea',
  templateUrl: './ingresar-tarea.component.html',
  styleUrls: ['./ingresar-tarea.component.css']
})
export class IngresarTareaComponent implements OnInit {
  @ViewChild('exito') exito!: SwalComponent;

  tarea: Tarea = new Tarea();
  
  Estado = Estado;
  Prioridad = Prioridad;
  listaEstados = Object.values(Estado);
  listaPrioridad = Object.values(Prioridad);
  listaResponsables: Responsable[] = [];
  listaProyectos: Proyecto[] = []

  constructor(private tareaService: TareaService, private responsableService: ResponsableService, private proyectoService: ProyectoService, private router: Router){}

  

  ngOnInit(): void {
    console.log(this.tarea);
    this.traerOpcionesResponsable();
    this.traerOpcionesProyectos();
  }

  traerOpcionesResponsable(){
    this.responsableService.obtenerListaResponsables().subscribe(data =>{
      this.listaResponsables = data;
      console.log(this.listaResponsables)
    })
  }

  traerOpcionesProyectos(){
    this.proyectoService.obtenerListaProyectos().subscribe(data => {
      this.listaProyectos = data;
      console.log(this.listaProyectos)
    })
  }

  guardarTarea(){
   const payload = {
      descripcion: this.tarea.descripcion,
      prioridad: this.tarea.prioridad,
      estado: this.tarea.estado,
      responsable: {id: this.tarea.responsable},
      proyecto: {id: this.tarea.proyecto}
  }
    this.tareaService.createTarea(payload).subscribe(data => {
      console.log(payload)
      this.exito.fire();
      this.router.navigate(['/tareas']);
    })
  }

  onSubmit(): void{
    this.guardarTarea();
  }

  cancelar(){
    this.router.navigate(['/tareas']);
  }

}
