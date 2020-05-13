import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home, Cliente } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

casos: Home[]=[];
clientes: Cliente[]=[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getCasos();
    this.getClientes();
  }

  getCasos (): void {
    this.homeService.getCasos()
    .subscribe(resp =>{
      this.casos = resp;
    console.log(this.casos);
    });
  }

  getClientes(): void {
    this.homeService.getCliente()
    .subscribe(resp => {
      this.clientes = resp;
      console.log(this.clientes);

    })
  }


}
