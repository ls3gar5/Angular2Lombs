import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public _productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        // console.log(params['termino']);
        this._productosService.buscarProducto(params['termino']);
      });
  }

}
