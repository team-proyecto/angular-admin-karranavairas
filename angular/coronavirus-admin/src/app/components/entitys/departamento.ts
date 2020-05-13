import { Provincia } from './provincia';

export class Departamento {
    id: number;
  	nombreDepartamento: string;
  	estado: boolean = true;
    provincia: Array<Provincia>=[];    
}
