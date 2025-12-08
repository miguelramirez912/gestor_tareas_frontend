import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = "http://localhost:8080/api/tareas";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpclient: HttpClient) { }

  obtenerListaDeTareas():Observable<Tarea[]>{
    return this.httpclient.get<Tarea[]>(this.apiUrl);
  }

  createTarea(tarea:any):Observable<Object>{
    console.log("ejecutando post tarea a bd")
    return this.httpclient.post(this.apiUrl, tarea, {headers: this.httpHeaders});
  }

  getTarea(id:number): Observable<Tarea>{
    return this.httpclient.get<Tarea>(`${this.apiUrl}/${id}`);
  }

  deleteTarea(id:number): Observable<Tarea>{
    return this.httpclient.delete<Tarea>(`${this.apiUrl}/${id}`, {headers: this.httpHeaders});
  }

  actualizarTarea(id:number, tarea:any){
    return this.httpclient.put(`${this.apiUrl}/${id}`, tarea, {headers: this.httpHeaders});
  }

}
