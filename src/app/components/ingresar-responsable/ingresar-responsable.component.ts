import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Departamento } from 'src/app/models/interfaces/departamento';
import { Puesto } from 'src/app/models/interfaces/puesto';
import { Responsable } from 'src/app/models/responsable';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-ingresar-responsable',
  templateUrl: './ingresar-responsable.component.html',
  styleUrls: ['./ingresar-responsable.component.css'],
})

export class IngresarResponsableComponent implements OnInit {
  @ViewChild('exito') exito!: SwalComponent;

  responsable:Responsable = new Responsable();
  listaDePuestos!:Puesto[];
  listaDeDepartamentos!:Departamento[];
  puestoDefault = {id: 0, nombrePuesto: "Selecciona una opcion"}

  constructor(private responsableService:ResponsableService, private puestoService:PuestoService, private departamentoService:DepartamentoService, private router:Router ){}

  ngOnInit(): void {
    this.traerListaPuestos();
    this.traerListaDepartamentos();
    console.log(this.responsable);
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

  guardarResponsable(){
    const payload = {
      nombre: this.responsable.nombre,
      puesto: {id: this.responsable.puesto},
      departamento: {id: this.responsable.departamento}
    }
    console.log(payload);
    this.responsableService.createResponsable(payload).subscribe( response => {
      console.log(response);
      this.exito.fire();
      this.router.navigate(['/responsables']);
    })
  }

  onSubmit(){
    this.guardarResponsable();
  }

  cancelar(){
    this.router.navigate(['/responsables']);
  }
}
