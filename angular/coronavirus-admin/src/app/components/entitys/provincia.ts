import { Departamento } from './departamento';
import { Distrito } from './distrito';

export class Provincia {
id: number;
nombreProvincia: string;
// tslint:disable-next-line: no-inferrable-types
estado: boolean = true;
departamento: Departamento;
distrito: Distrito[];
}
