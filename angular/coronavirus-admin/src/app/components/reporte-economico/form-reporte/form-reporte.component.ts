import { Component, OnInit } from '@angular/core';
import { ReporteEconomico } from '../../entitys/reporte-economico';
import { AdicionalesService } from '../../services/adicionales.service';
import { EstadoEconomico } from '../../entitys/estado-economico';
import { UsuariosCasos } from '../../entitys/usuarios-casos';
import { UsuarioService } from '../../services/usuario.service';
import { ReporteEconomicoService } from '../../services/reporte-economico.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html'
})
export class FormReporteComponent implements OnInit {

    public reporte: ReporteEconomico = new ReporteEconomico();
    estados: EstadoEconomico[];
    usuarios: UsuariosCasos[];

  constructor(private adicionalesService: AdicionalesService,
               private usuarioService: UsuarioService,
               private reportService: ReporteEconomicoService,
               private router: Router,
                private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEstadoEconomicos();
    this.getUsuariosCasos();
  }


  getEstadoEconomicos(): void {
    this.adicionalesService.getEstadoEconomivo().subscribe( estado => this.estados = estado );
  }

  getUsuariosCasos(): void {
    this.usuarioService.getUsuariosCasos().subscribe(usuario => this.usuarios = usuario);
  }

  compararEstado(o1: EstadoEconomico, o2: EstadoEconomico): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }
  compararUsuario(o1: UsuariosCasos, o2: UsuariosCasos): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

  create(): void {
    // tslint:disable-next-line: comment-format
    //console.log(this.usuarioscasos);
    // this.usuario.codigoConfirmacion = null;
    this.reporte.bonoAsignado = true;
    this.reportService.create(this.reporte)
      .subscribe(
        reporte => {
          this.router.navigate(['/usuarios']);
          Swal.fire('Nuevo cliente', `El reporte Ha sido creado con exito`, 'success');
        });
  }

}
