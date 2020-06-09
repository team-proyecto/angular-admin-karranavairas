import { Component, OnInit } from '@angular/core';
import { ReporteEconomicoService } from "../services/reporte-economico.service";
import { ReporteEconomico } from '../entitys/reporte-economico';


@Component({
  selector: 'app-reporte-economico',
  templateUrl: './reporte-economico.component.html'
})
export class ReporteEconomicoComponent implements OnInit {

  reportes: ReporteEconomico[];

  constructor(private reporteEconomicoService: ReporteEconomicoService) { }

  ngOnInit() {
    this.getReporteEconomico();
  }

  getReporteEconomico(): void {
    this.reporteEconomicoService.getReporteEconomicos().subscribe(reporte => this.reportes = reporte);
  }




}
