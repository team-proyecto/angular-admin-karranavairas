import { Component, OnInit } from '@angular/core';
import { ReporteEconomicoService } from "../services/reporte-economico.service";
import { ReporteEconomico } from '../entitys/reporte-economico';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-economico',
  templateUrl: './reporte-economico.component.html'
})
export class ReporteEconomicoComponent implements OnInit {

  public reporte = new ReporteEconomico();
  reportes: ReporteEconomico[];

  constructor(private reporteEconomicoService: ReporteEconomicoService) { }

  ngOnInit() {
    this.getReporteEconomico();
  }

  getReporteEconomico(): void {
    this.reporteEconomicoService.getReporteEconomicos().subscribe(reporte => this.reportes = reporte);
  }

  delete(reporte: ReporteEconomico): void {
    Swal.fire({
        title: 'Está Seguro?',
        text: `¿Seguro que desea eliminar el Reporte`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.value) {
          this.reporteEconomicoService.delete(reporte.id).subscribe(response => {
            this.reportes = this.reportes.filter(rep => rep !== reporte);
            Swal.fire(
              'Eliminado!',
              'Se Elimino con Exito!',
              'success'
            );
          });
        }
      });
  }



}
