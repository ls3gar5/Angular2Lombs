import { Component, Inject, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
    @Inject(Router) private router: Router) { }

  ngOnInit() {
  }

  public buscarProducto (termino: string) {

    if (termino.length === 0) {
      return;
    }

    this.router.navigate(['/search', termino]);

    // console.log(termino);

  }

}
