import { Estado } from "../enums/estado";
import { Prioridad } from "../enums/prioridad";
import { Proyecto } from "./interfaces/proyecto";
import { Responsable } from "./responsable";

export class Tarea {
    id!: number;
    descripcion!:String;
    estado!: Estado;
    prioridad!: Prioridad
    responsable!: Responsable;
    proyecto!: Proyecto;
}
