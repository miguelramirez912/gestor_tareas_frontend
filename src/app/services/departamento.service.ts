import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = "http://localhost:8080/api/departamentos";

  constructor(private httpClient:HttpClient) { }

  obtenerListaDepartamentos():Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(this.apiUrl);
  }
}
