import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../models/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private apiUrl = "http://localhost:8080/api/responsables";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient:HttpClient) { }

  obtenerListaResponsables():Observable<Responsable[]>{
    return this.httpClient.get<Responsable[]>(this.apiUrl);
  }

  createResponsable(responsable:any):Observable<Object>{
    return this.httpClient.post(this.apiUrl, responsable, {headers: this.httpHeaders});
  }

  getResponsable(id:number):Observable<Responsable>{
    return this.httpClient.get<Responsable>(`${this.apiUrl}/${id}`);
  }

  deleteResponsable(id:number):Observable<Responsable>{
    return this.httpClient.delete<Responsable>(`${this.apiUrl}/${id}`, {headers: this.httpHeaders})
  }

  actualizarResponsable(id:number, responsable:any){
    return this.httpClient.put(`${this.apiUrl}/${id}`, responsable, {headers: this.httpHeaders})
  }

}
