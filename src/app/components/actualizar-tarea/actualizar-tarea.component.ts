import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Estado } from 'src/app/enums/estado';
import { Prioridad } from 'src/app/enums/prioridad';
import { Proyecto } from 'src/app/models/interfaces/proyecto';
import { Responsable } from 'src/app/models/responsable';
import { Tarea } from 'src/app/models/tarea';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.css']
})

export class ActualizarTareaComponent implements OnInit {
  tarea: Tarea = new Tarea();
    
    Estado = Estado;
    Prioridad = Prioridad;
    listaEstados = Object.values(Estado);
    listaPrioridad = Object.values(Prioridad);
    listaResponsables: Responsable[] = [];
    listaProyectos: Proyecto[] = []
    id:any = null;
    listasApiCargadas: boolean = false;
  
    constructor(private tareaService: TareaService, private responsableService: ResponsableService, private proyectoService: ProyectoService, private router: Router, private activatedRoute:ActivatedRoute){}
  
    
  
    ngOnInit(): void {
      console.log(this.tarea);
      this.traerOpcionesProyectos();
      this.traerOpcionesResponsable();
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log("El id es : " + this.id);
      setTimeout(() => {
        this.llenarFormulario();
      }, 2000);
    }
  
    traerOpcionesResponsable(){
      console.log("Ejecutando traerOpcionesResponsables")
      this.responsableService.obtenerListaResponsables().subscribe(data =>{
        this.listaResponsables = data;
        console.log(this.listaResponsables)
      })
    }
  
    traerOpcionesProyectos(){
      console.log("Ejecutando traerOpcionesProyectos")
      this.proyectoService.obtenerListaProyectos().subscribe(data => {
        this.listaProyectos = data;
        console.log(this.listaProyectos)
      })
    }

    llenarFormulario(){
      console.log("Ejcutando llenar el formulario")
      // this.cargarListasApi();
      console.log(this.listaResponsables);
      console.log(this.listaProyectos)
      this.tareaService.getTarea(this.id).subscribe(response => {
        console.log(response);
        this.tarea.id = response.id;
        this.tarea.descripcion = response.descripcion;
        this.tarea.estado = response.estado;
        this.tarea.prioridad = response.prioridad;
        this.tarea.responsable = response.responsable;
        this.tarea.proyecto = response.proyecto;
        console.log(this.tarea);
      });
    }
  
    actualizarTarea(){
     const payload = {
        id: this.tarea.id,
        descripcion: this.tarea.descripcion,
        prioridad: this.tarea.prioridad,
        estado: this.tarea.estado,
        responsable: {id: this.tarea.responsable},
        proyecto: {id: this.tarea.proyecto}
    }
      this.tareaService.actualizarTarea(this.tarea.id, payload).subscribe(data => {
        console.log(payload)
        this.router.navigate(['/tareas'])
      })
    }
  
    onSubmit(): void{
      this.actualizarTarea();
    }
}
