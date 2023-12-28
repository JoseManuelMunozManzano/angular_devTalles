// Lo que haya en pages tomará todo el espacio visual disponible.
import { Component } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { type Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  // Mandaremos a gifs-card-list el listado de los gifs que queremos que renderice.
  // Para ello inyectaremos aquí el servicio
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
