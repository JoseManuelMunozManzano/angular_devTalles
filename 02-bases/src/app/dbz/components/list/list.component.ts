import { Component, Input } from '@angular/core';
import { type Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // Para mandar información del padre main-page.component.ts a este hijo list.component hay que usar
  // el decorador @Input() sobre una property.
  // Con solo indicar este decorador sobre una property estamos diciendo que ListComponent puede
  // recibir una property llamada characterList, o llamada con el nombre que pongamos entre los paréntesis
  // del @Input(<nombre>)
  // Si no mandan nada, tenemos el valor por defecto de Trunks y power 10.
  // Lo mejor es poner un valor vacío como valor por defecto, pero se indica uno para aprender.
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];
}
