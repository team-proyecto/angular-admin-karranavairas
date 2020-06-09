import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuariosCasos } from '../entitys/usuarios-casos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios-casos',
  templateUrl: './usuarios-casos.component.html'
})
export class UsuariosCasosComponent implements OnInit {

public usuario = new UsuariosCasos();

usuarioscasos: UsuariosCasos[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuariosCasos();
  }

getUsuariosCasos(): void {
  this.usuarioService.getUsuariosCasos().subscribe( response => {
    this.usuarioscasos = response;
    console.log(this.usuarioscasos);
  });
}

delete(usuario: UsuariosCasos): void {
  Swal.fire({
      title: 'Está Seguro?',
      text: `¿Seguro que desea eliminar al cliente ${usuario.nombre} ${usuario.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe(response => {
          this.usuarioscasos = this.usuarioscasos.filter(cli => cli !== usuario);
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
