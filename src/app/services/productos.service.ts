import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  productos: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarPorductos();
  }

  public cargarPorductos() {
    this.http.get('https://lomb-bags.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        // console.log(this.productos);

        setTimeout(() => {
          this.cargando = false;
        }, 1500);
    });
  }
}
