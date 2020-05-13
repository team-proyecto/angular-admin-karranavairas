import { Component, OnInit } from '@angular/core';
/*Service*/
import { UsuarioService } from '../../services/usuario.service';
import { AdicionalesService } from '../../services/adicionales.service';

/*Entitys*/
import { UsuariosCasos } from '../../entitys/usuarios-casos';
import { Documento } from '../../entitys/documento';
import { Departamento } from '../../entitys/departamento';
import { Provincia } from '../../entitys/provincia';
import { Nacionalidad } from '../../entitys/nacionalidad';

/*Component*/
import { UsuariosCasosComponent } from '../usuarios-casos.component';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  public usuario : UsuariosCasos = new UsuariosCasos();
  usuarioscasos: UsuariosCasos[] = []
  documentos: Documento[];
  departamentos: Departamento[];
  items : Departamento;
  provincias : Provincia[];
  nacionalidades: Nacionalidad[];

  constructor(
    private usuarioService: UsuarioService,
    private adicionalesService:AdicionalesService,
    private usuariosCasosComponent: UsuariosCasosComponent) { }

  ngOnInit() {
    this.adicionalesService.getDocumento().subscribe( documento =>  this.documentos = documento );
    this.adicionalesService.getDepartamento().subscribe(departamento => this.departamentos = departamento);
    this.adicionalesService.getNacionalidad().subscribe( nacionalidad => this.nacionalidades = nacionalidad);
  }

  create(): void {
    //console.log(this.usuarioscasos);
    this.usuario.codigoConfirmacion = null
    this.usuario.condicionUso = true
    this.usuarioService.create(this.usuario)
      .subscribe(
        usuario => {
          this.usuariosCasosComponent.getUsuariosCasos();
          Swal.fire('Nuevo cliente', `El cliente ${usuario.nombre} ha sido creado con éxito`, 'success');
        });
  }

  compararDocumento(o1: Documento, o2: Documento): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }
  compararDepartamento(o1: Departamento, o2: Departamento): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }
  compararNacionalidad(o1: Nacionalidad, o2: Nacionalidad): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

  /*onSelect(id: number): void {
    this.adicionalesService.getProvincia(id).subscribe(provincia =>{ this.provincias = provincia; console.log(this.provincias);
    });
    console.log('ID ->',id);
    (change)="onSelect(usuario.departamento.id)"
  }*/


}
