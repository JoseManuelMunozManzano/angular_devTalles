import { Component, Input } from '@angular/core';

import { type Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  // Mandamos información del padre al hijo
  @Input()
  public gifs: Gif[] = [];
}
