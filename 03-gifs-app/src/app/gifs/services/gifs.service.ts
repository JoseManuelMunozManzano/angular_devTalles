import { Injectable } from '@angular/core';

// Al indicar root, GifsService estará disponible en todos los módulos de toda la app
// que inyecten este servicio. Esto está desde Angular 6
// Si no indicamos provideIn, entonces, en gifs.module.ts, en @NgModule habrá que indicar
// providers: [GifsService]
// Y si queremos usarlo fuera tendremos que ponerlo también en exports
@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  // Como el arreglo pasa por referencia, para evitar que se pueda manipular
  // usamos el operador spread para retornar una copia.
  // No es que haya que hacerlo siempre así, pero en este caso queremos
  // romper la referencia de JavaScript.
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    // Añadir al principio
    this._tagsHistory.unshift(tag);
  }
}
