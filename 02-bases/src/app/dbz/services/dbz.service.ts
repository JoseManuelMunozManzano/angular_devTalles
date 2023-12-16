import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

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
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    // Buena práctica: usar operador spread, porque si tenemos que añadir/eliminar
    // propiedades a Character, no hay que tocar este código.
    // Lo mejor es añadir el operador spread y luego lo que queremos sobreescribir.
    // En este caso da igual porque sabemos que la propiedad id no viene en character.
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  // Cambiamos el índice del elemento, que es muy volátil porque dos usuarios podrían dar a la vez
  // en delete al mismo elemento, con lo que se puede borrar un elemento que no queremos.
  // Vamos a instalar un paquete externo para poder trabajar con IDs únicos (UUID)
  // https://www.npmjs.com/package/uuid
  //
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
