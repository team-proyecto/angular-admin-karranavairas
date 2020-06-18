import { Component, OnInit } from '@angular/core';
import { ReporteEconomico } from '../../entitys/reporte-economico';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html'
})
export class FormReporteComponent implements OnInit {

public reporte: ReporteEconomico= new ReporteEconomico();

  constructor() { }

  ngOnInit() {
  }

}
