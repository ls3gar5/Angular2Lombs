import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoEquipo } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina;
  cargada = false;
  infoEquipo: InfoEquipo;

  constructor(private http: HttpClient) {
    // console.log('Servicio InfoPagina')

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      // console.log(resp); // resp es sin tipar por lo que no sabe q es.
    });
  }

  private cargarEquipo() {
       // Leer JSON
       this.http.get('https://lomb-bags.firebaseio.com/equipo.json')
       .subscribe( (resp: InfoEquipo) => {
         this.infoEquipo = resp;
         // console.log(resp); // resp es sin tipar por lo que no sabe q es.
       });
  }
}
