import { Component, OnInit } from '@angular/core';

import { BusquedaServiceService } from './services/busqueda-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectobusqueda';

  txtBuscar: string = '';

  constructor( private BusquedaServiceService: BusquedaServiceService ){}

  ngOnInit(){
    //this.searchUser('master');
  }

  searchUser(str: string){
    this.BusquedaServiceService.busqueda(str).then( (response) => {
     alert("Total de coincidencias: " + response.total_count);
    }, (error) => {
      alert("error: " + error.statusText);
    })
  }

  initBuscar(){
    console.log(this.txtBuscar);
    if(this.txtBuscar)
      this.searchUser(this.txtBuscar);
    else
      alert("!!! No ingreso nombre de usuario !!!");
  }
}
