import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/interfaces/proyecto';
import { Responsable } from '../models/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private apiUrl = "http://localhost:8080/api/responsables";

  constructor(private httpClient:HttpClient) { }

  obtenerListaResponsables():Observable<Responsable[]>{
    return this.httpClient.get<Responsable[]>(this.apiUrl);
  }

}
