import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
    private router: Router) { }

  ngOnInit() {
  }

  public buscarProducto(termino: string) {

    if (termino.length === 0) {
      return;
    }

    this.router.navigate(['/search', termino]);

    // console.log(termino);

  }

}
