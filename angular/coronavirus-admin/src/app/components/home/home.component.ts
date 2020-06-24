import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home, Cliente } from './home';
import { UsuariosCasos } from '../entitys/usuarios-casos';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public casos: Home = new Home();
usuarios: UsuariosCasos[];
clientes: Cliente[] = [];
zoom = 18;
radius = 20;

markers: marker[] = [
  {
    lat: -11.9896393,
    lng: -77.061253,
    label: 'A',
    draggable: true
  },
  {
    lat: -11.9898854,
    lng: -77.0605891,
    label: 'B',
    draggable: false
  },
  {
    lat: -11.989888,
    lng: -77.0621917,
    label: 'C',
    draggable: true
  }
];


  constructor(private homeService: HomeService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getCasos();
    this.getUsuariosCasos();
    // this.getClientes();
  }

  getCasos(): void {
    this.homeService.getCasos()
    .subscribe(resp => {
      this.casos = resp;
    //  console.log(this.casos);
    });
  }

    getUsuariosCasos(): void {
      this.usuarioService.getUsuariosCasos().subscribe( usuario => this.usuarios = usuario);
    }


    centerChange($event) {
      console.log($event);
      // if (this.zoom < 18) {
      //   this.radius = 25;
      // }
    }


  /*getClientes(): void {
    this.homeService.getCliente()
    .subscribe(resp => {
      this.clientes = resp;
      console.log(this.clientes);

    });
   }*/


}

interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}