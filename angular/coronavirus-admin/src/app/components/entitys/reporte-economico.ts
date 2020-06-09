import { UsuariosCasos } from './usuarios-casos';
import { EstadoEconomico } from './estado-economico';

export class ReporteEconomico {

id: number;
bonoAsignado: boolean;
montoServicio: number;
boletaImage: string;
estadoEconomico: EstadoEconomico;
usuarioCaso: UsuariosCasos;
fechaRegistro: Date;
estado: boolean;

}
