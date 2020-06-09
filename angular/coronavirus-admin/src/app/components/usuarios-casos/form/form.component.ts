import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { AdicionalesService } from '../../services/adicionales.service';
import { Router, ActivatedRoute } from '@angular/router';
/*Entitys*/
import { UsuariosCasos } from '../../entitys/usuarios-casos';
import { Documento } from '../../entitys/documento';
import { Departamento } from '../../entitys/departamento';
import { Provincia } from '../../entitys/provincia';
import { Nacionalidad } from '../../entitys/nacionalidad';

import Swal from 'sweetalert2';
import { Distrito } from '../../entitys/distrito';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public departamento: Departamento = new Departamento();
  public provincia: Provincia = new Provincia();
  public distrito: Distrito = new Distrito();
  public usuario: UsuariosCasos = new UsuariosCasos();
  usuarioscasos: UsuariosCasos[] = [];
  documentos: Documento[];
  departamentos: Departamento[];
  items: Departamento = new Departamento();
  array: Provincia = new Provincia();
  nacionalidades: Nacionalidad[];


  constructor(
    private usuarioService: UsuarioService,
    private adicionalesService: AdicionalesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
) { }

  ngOnInit() {
    this.adicionalesService.getDocumento().subscribe( documento =>  this.documentos = documento );
    this.adicionalesService.getDepartamento().subscribe(departamento => this.departamentos = departamento);
    this.adicionalesService.getNacionalidad().subscribe( nacionalidad => this.nacionalidades = nacionalidad);
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const id = params['id'];
      if (id) {
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario);
      }
    });
  }

  create(): void {
    // tslint:disable-next-line: comment-format
    //console.log(this.usuarioscasos);
    this.usuario.codigoConfirmacion = null;
    this.usuario.condicionUso = true;
    this.usuarioService.create(this.usuario)
      .subscribe(
        usuario => {
          this.router.navigate(['/usuarios']);
          Swal.fire('Nuevo cliente', `El cliente ${this.usuario.nombre} ${this.usuario.apellido} ha sido creado con éxito`, 'success');
        });
  }
  compararDocumento(o1: Documento, o2: Documento): boolean {
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

  compararDepartamento(o1: Departamento, o2: Departamento): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

  onSelectDepartamento(id: any): void {
    if (id === 0) {
      this.items = null;
    } else {
      this.adicionalesService.getProvincia(id).subscribe(provincia => this.items = provincia);
      console.log('ID Departamento ->', id);
    }

  }
  onSelectProvincia(id: any): void {
    this.adicionalesService.getDistrito(id).subscribe(distrito => this.array = distrito);
    console.log('ID Provincia ->', id);
  }


}
