import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class AboutComponent implements OnInit {

  constructor(public _infoEquipo: InfoPaginaService) { }

  ngOnInit() {
  }

}
