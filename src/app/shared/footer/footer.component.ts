import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
