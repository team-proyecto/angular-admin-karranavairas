import { Provincia } from './provincia';

export class Distrito {

  id: number;
  nombreDistrito: string;
  provincia: Provincia;
  // tslint:disable-next-line: no-inferrable-types
  estado: boolean = true;
}
