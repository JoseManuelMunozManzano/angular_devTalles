import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { type Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // En el constructor hacemos la inyección de dependencias.
  // Luego estas properties serán privadas, pero por ahora lo ponemos público para hacer
  // referencia a dbzService en el fuente main-page.component.html
  // NOTA: No es correcto hacer referencia directamente al servicio.
  //
  // constructor(public dbzService: DbzService) {}
  //
  // Ahora sí hacemos la buena práctica de hacer nuestro servicio privado.
  // Esto hace que en nuestro html no tengamos acceso directo a las propiedades/métodos del service.
  // Pero es muy buena práctica porque encapsulamos la funcionalidad y accederemos a lo necesario del servicio.
  constructor(private dbzService: DbzService) {}

  // Una manera de resolver la necesidad de acceder a las properties de un service es exponerlas
  // con getters y setters.
  //
  // IMPORTANTE: Si modificamos algo en estos getter/setter, vamos a
  // modificar los characters, porque los objetos y arrays se pasan por referencia.
  // Para evitar ese posible problema, hacemos uso del operador spread
  // que nos devuelve una copia.
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  // Para acceder a métodos del servicio, creamos otros métodos que los llaman.
  // Esto mejora la legibilidad del código y la reutilización del servicio.
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
