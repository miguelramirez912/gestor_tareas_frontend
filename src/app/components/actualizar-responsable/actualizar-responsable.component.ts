import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Departamento } from 'src/app/models/interfaces/departamento';
import { Puesto } from 'src/app/models/interfaces/puesto';
import { Responsable } from 'src/app/models/responsable';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-actualizar-responsable',
  templateUrl: './actualizar-responsable.component.html',
  styleUrls: ['./actualizar-responsable.component.css']
})
export class ActualizarResponsableComponent implements OnInit {

    @ViewChild('exito') exito!: SwalComponent;

    responsable:Responsable = new Responsable();
    listaDePuestos!:Puesto[];
    listaDeDepartamentos!:Departamento[];
    id!:any;
    formularioEstaLleno = false;

  constructor(private puestoService:PuestoService, private departamentoService:DepartamentoService, private responsableService:ResponsableService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.traerListaPuestos();
    this.traerListaDepartamentos();
    console.log(this.responsable);
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    setTimeout(() => {
      this.llenarFormulario();
    }, 500);
  }

  traerListaPuestos(){
    this.puestoService.obtenerListaDePuestos().subscribe(response => {
      console.log(response);
      this.listaDePuestos = response;
    })
  }

  traerListaDepartamentos(){
    this.departamentoService.obtenerListaDepartamentos().subscribe(response => {
      console.log(response);
      this.listaDeDepartamentos = response;
    })
  }

    actualizarResponsable(){
    const payload = {
      nombre: this.responsable.nombre,
      puesto: this.responsable.puesto,
      departamento: this.responsable.departamento
    }
    console.log("payload:")
    console.log(payload);
    this.responsableService.actualizarResponsable(this.id, payload).subscribe( response => {
      console.log(response);
      this.exito.fire();
      this.router.navigate(['/responsables']);
    })
  }

  llenarFormulario(){
    console.log("Se inicia llenado de formulario");
    this.responsableService.getResponsable(this.id).subscribe(response => {
      const puestoSeleccionado = this.listaDePuestos.find(puesto => puesto.id == response.puesto.id)
      const departamentoSeleccionado = this.listaDeDepartamentos.find( depa => depa.id === response.departamento.id)
      console.log(puestoSeleccionado);
      console.log(departamentoSeleccionado);
      this.responsable.id = response.id;
      this.responsable.nombre = response.nombre;
      this.responsable.puesto = puestoSeleccionado!;
      this.responsable.departamento = departamentoSeleccionado!;
      this.formularioEstaLleno = true;
      console.log(this.responsable);
    })

  }

  onSubmit(){
    this.actualizarResponsable();
  }

  cancelar(){
    this.router.navigate(['/responsables']);
  }

}
