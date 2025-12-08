import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Responsable } from 'src/app/models/responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

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
    if (confirm("Esta seguro de eliminar este registro?!!!")) {
      this.responsableService.deleteResponsable(responsable.id).subscribe( response => {
        this.responsables = this.responsables.filter( resp => resp.id != responsable.id)
      })
    }
  }


}
