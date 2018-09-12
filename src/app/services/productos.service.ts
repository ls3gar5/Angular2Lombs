import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  productos: Producto[] = [];
  productosFiltrado: Producto[] =[];
  cargando = true;

  cantidadItems: number;
  constructor(private http: HttpClient) {
    this.cargarPorductos();
  }

  public cargarPorductos() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://lomb-bags.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          // console.log(this.productos);
          setTimeout(() => {
            this.cargando = false;
          }, 1500);

          this.cantidadItems = this.productos.length;

          resolve();
      });
    });
  }

  public getProducto(id: string) {
    // estoy retornando un observable para suscribir donde lo querio usar.
    return this.http.get(`https://lomb-bags.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarPorductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino: string) {

    this.productosFiltrado =  this.productos.filter(producto => {
      return producto.categoria.toUpperCase().includes(termino.toUpperCase())
      || producto.titulo.toUpperCase().includes(termino.toUpperCase());
    });
  }
}
