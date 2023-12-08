// Este es el componente principal de una app de Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  // No se suele indicar public (es por defecto)
  // Si es private o static, obviamente si que hay que indicarlo.
  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
