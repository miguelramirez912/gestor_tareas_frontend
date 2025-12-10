import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Responsable } from 'src/app/models/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  @ViewChild('exito') exito!: SwalComponent;
  @ViewChild('erroreliminar') erroreliminar!: SwalComponent; 

  responsables!:Responsable[];

  constructor(private responsableService: ResponsableService, private router:Router){}

  ngOnInit(): void {
    this.obtenerListaDeResponsables();
  }

  obtenerListaDeResponsables(){
    this.responsableService.obtenerListaResponsables().subscribe( response => {
      console.log(response);
      this.responsables = response;
    })
  }

  editarResponsable(responsable:Responsable){
    this.responsableService.getResponsable(responsable.id).subscribe( response => {
      console.log(response)
    })
    this.router.navigate(['actualizar-responsable', responsable.id]);
  }

  eliminarResponsable(responsable:Responsable){
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
          this.responsableService.deleteResponsable(responsable.id).subscribe({
            next: () => {
              this.responsables = this.responsables.filter( resp => resp.id != responsable.id);
              this.exito.fire();
            },
            error: (error) => {
              this.erroreliminar.fire();
            }
          })
        }
      });        
  }


}
