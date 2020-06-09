import { Provincia } from './provincia';

export class Departamento {
id: number;
nombreDepartamento: string;
// tslint:disable-next-line: no-inferrable-types
estado: boolean = true;
provincia: Array<Provincia> = [];
}
