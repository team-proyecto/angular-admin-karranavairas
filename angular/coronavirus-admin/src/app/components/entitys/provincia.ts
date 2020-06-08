import { Departamento } from './departamento';
import { Distrito } from './distrito';
export class Provincia {
id : number;
nombreProvincia: string;
estado:boolean = true;
departamento: Departamento;
distrito: Distrito[];
}
