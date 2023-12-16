import { Component } from '@angular/core';
import { type Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    // Esto no debería ser el lugar donde ubicar la data, pero todavía no hemos visto
    // otras estructuras para mantener nuestra información.
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main Page');
    console.log(character);
  }
}
