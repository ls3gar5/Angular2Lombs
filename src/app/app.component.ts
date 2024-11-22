import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent]
})
export class AppComponent {
  // Con esto estamos injectando el servicio en el arranque de la pagina
  constructor(public infoPaginaService: InfoPaginaService,
              public productosService: ProductosService) {

  }
}
