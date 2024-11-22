import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(@Inject(Router) private route: ActivatedRoute,
    public _productosService: ProductosService) { }

  ngOnInit() {

  this.route.params
  .subscribe(params => {
    // console.log(params['termino']);
    this._productosService.buscarProducto(params['termino']);
  });
  }

}
