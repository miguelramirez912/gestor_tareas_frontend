import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Puesto } from '../models/interfaces/puesto';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  private apiUrl = "http://localhost:8080/api/puestos";

  constructor(private httpClient:HttpClient) { }

  obtenerListaDePuestos():Observable<Puesto[]>{
    return this.httpClient.get<Puesto[]>(this.apiUrl);
  }
}
