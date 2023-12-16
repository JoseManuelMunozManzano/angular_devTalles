import { Component, EventEmitter, Output } from '@angular/core';
import { type Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  // El EventEmitter es muy flexible.
  // Puede emitir strings, números, arreglos, objetos...
  // Para que se esté escuchando onNewCharacter, tenemos que indicar el decorador @Output()
  // Podemos poner dentro de los paréntesis el nombre que queramos que sea visual. Si no se
  // indica nada, por defecto es onNewCharacter.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // La property se puede inicializar aquí (suele ser lo normal) o en el constructor.
  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // En el navegador la ejecución parará aquí para que podamos hacer debug
    // debugger;

    // console.log(this.character);

    if (this.character.name.length === 0) return;

    // El hijo emite este objeto que el padre escuchará
    this.onNewCharacter.emit(this.character);

    // De nuevo usamos aquí Two Way Data Binding, ahora para resetear los valores.
    this.character = { name: '', power: 0 };
  }
}
