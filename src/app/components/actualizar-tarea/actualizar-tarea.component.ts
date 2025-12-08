import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/enums/estado';
import { Prioridad } from 'src/app/enums/prioridad';
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
    listaResponsables: any[] = [];
    listaProyectos: any[] = []
    id:any = null;
  
    constructor(private tareaService: TareaService, private responsableService: ResponsableService, private proyectoService: ProyectoService, private router: Router, private activatedRoute:ActivatedRoute){}
  
    
  
    ngOnInit(): void {
      console.log(this.tarea);
      this.traerOpcionesProyectos();
      this.traerOpcionesResponsable();
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log("El id es : " + this.id);
      // setTimeout(() => {
        
      // }, 2000);
      this.llenarFormulario();
    }
  
    traerOpcionesResponsable(){
      console.log("Ejecutando traerOpcionesResponsables")
      this.responsableService.obtenerListaResponsables().subscribe(data =>{
        this.listaResponsables = data;
        // console.log(this.listaResponsables)
      })
    }
  
    traerOpcionesProyectos(){
      console.log("Ejecutando traerOpcionesProyectos")
      this.proyectoService.obtenerListaProyectos().subscribe(data => {
        this.listaProyectos = data;
        // console.log(this.listaProyectos)
      })
    }

    llenarFormulario(){
      this.tareaService.getTarea(this.id).subscribe(response => {
        const responsableSeleccionado = this.listaResponsables.find(
          r => r.id === response.responsable.id
        );
        const proyectoSeleccionado = this.listaProyectos.find(
          proyecto => proyecto.id === response.proyecto.id
        );
        this.tarea.id = response.id;
        this.tarea.descripcion = response.descripcion;
        this.tarea.estado = response.estado;
        this.tarea.prioridad = response.prioridad;
        this.tarea.responsable = responsableSeleccionado!;
        console.log("responsable seleccionado: ")
        console.log(responsableSeleccionado);
        this.tarea.proyecto = proyectoSeleccionado!;
      });
    }
  
    actualizarTarea(){
      const payload = {
        // id: this.tarea.id,
        descripcion: this.tarea.descripcion,
        prioridad: this.tarea.prioridad,
        estado: this.tarea.estado,
        responsable: {id: this.tarea.responsable},
        proyecto: {id: this.tarea.proyecto}
      }
      console.log(payload)
      this.tareaService.actualizarTarea(this.id, payload).subscribe(data => {
        this.router.navigate(['/tareas'])
      })
    }
  
    onSubmit(): void{
      this.actualizarTarea();
    }
}
