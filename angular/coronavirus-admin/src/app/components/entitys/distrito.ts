import { Provincia } from './provincia';

export class Distrito {

  id: number;
  nombreDistrito:  string;
  provincia: Provincia;
  estado: boolean = true;
}
