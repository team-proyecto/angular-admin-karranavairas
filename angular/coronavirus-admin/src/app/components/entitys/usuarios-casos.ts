import { Departamento } from './departamento';
import { Documento } from './documento';
import { Nacionalidad } from './nacionalidad';

export class UsuariosCasos {
  id: number;
	telefono: string;
	nombre: string;
	apellido:string;
	nacimiento: Date;
	numeroDocumento: string;
	direccionDomicilio: string;
	codigoConfirmacion: number;
	condicionUso: Boolean;
	fechaRegistro: Date;
	departamento: Departamento;
  tipoDocumento: Documento;
	nacionalidad: Nacionalidad;
	/*private Gps gps;
	private TipoUsuario tipoUsuario;
	private ReporteEconomico resporteEconomico;
	private ReporteMedico reporteMedico;*/
	estado: boolean;
}