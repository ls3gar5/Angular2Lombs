import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Item } from '../../interfaces/info-pagina-interface';
import * as moment from 'moment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  idItem: string;
  idItemInt: number;
  producto: Item;
  timer: string;
// private route: ActivatedRoute es para recibir el parametro de la URL
  constructor(private route: ActivatedRoute,
            private router: Router,
            private _productoService: ProductosService,
            public _infoPaginaService: InfoPaginaService) {
              this.timer = moment().format('DD/MM/YYYY');
            }

  // [style.background]="'url(assets/productos/'+ idItem + '/main.jpg)'"

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      console.log(parametros['id']);

      this.idItem = parametros['id'];
      const stringLocal = this.idItem.substring(5);
      this.idItemInt = +stringLocal + 1;

      this._productoService.getProducto(this.idItem)
        .subscribe((resp: Item) => {
            this.producto = resp;
      });


    });

  }

  public nextPage () {
    if (this.idItemInt > this._productoService.cantidadItems) {
      this.idItemInt = 1;
    }

    this.router.navigate(['/item', 'prod-' + this.idItemInt]);

  }

}


