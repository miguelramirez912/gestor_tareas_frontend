import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl = "http://localhost:8080/api/proyectos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.apiUrl);
  }
}
