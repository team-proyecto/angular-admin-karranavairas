import { Tabla } from './tabla';

export class Home {
country: string;
cases: number;
todayCases: number;
deaths: number;
todayDeaths: number;
recovered: number;
active: number;
critical: number;
casesPerOneMillion: number;
deathsPerOneMillion: number;
totalTests: number;
testsPerOneMillion: number;
}

export class Cliente {
id: number;
nombresApellidos: string;
provincia: string;
departamento: string;
distrito: string;
estado: string;
createAt: Date;
tabla: Tabla;
}
