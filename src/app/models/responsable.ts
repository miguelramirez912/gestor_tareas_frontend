import { Departamento } from "./interfaces/departamento";
import { Puesto } from "./interfaces/puesto";

export class Responsable {
    id!: number;
    nombre!: String;
    puesto!: Puesto;
    departamento!: Departamento;
}
