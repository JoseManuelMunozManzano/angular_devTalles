import { Injectable } from '@angular/core';
import { type Character } from '../interfaces/character.interface';

// Injectable es el decorador que le dice a Angular que este fuente es un Servicio
// Desde Angular 6, tiene una propiedad llamada provideIn: 'root'
// Si no lo definimos, tendríamos que indicar el nombre de este servicio en app.module.ts, en la parte
// de los providers.
// Al definirlo, nuestro servicio será un singleton en toda la aplicación,
// siempre y cuando lo haga con inyección de dependencia.
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
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
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
