// En los components esperamos ver clases que se transforman en componentes al
// anotarlas con @Component
// Hay que indicar como mínimo el selector, que es como queremos llamar al componente
// y como va a usarse en el html,
// y el templateUrl que es el html que usamos para mostrarlo en el navegador.
//
// Se acostumbra a que los componentes personalizados tengan un prefijo, que se indica
// en el selector. En este caso es app-
//
// También se podría indicar template, indicando como string todo el html, en vez
// de usar templateUrl y hacer referencia a un html.
// El template (en vez de templateUrl) es aceptable cuando son como mucho 4 líneas,
// aunque muchas personas trabajan siempre con un html aparte.
//
// Más tarde veremos los Standalone Components, pero por ahora, para poder
// usar este componente, tenemos que publicar su existencia.
// Esto se hace en el fuente app.module.ts, en la parte declarations.
//
// Esto que hemos hecho de manera manual se puede automatizar con el CLI y otras herramientas
// como snippets de VSCode.
// Pero lo hemos hecho a mano para que se vea que es simplemente una clase que se exporta,
// que está anotada con @Component y que tiene un selector para usar en un html y un template
// con el html propio.
//
// Se ha rehecho el código de forma automática indicando el snippet: a-component
//
// Hemos encapsulado toda nuestra funcionalidad de counter en este componente.
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <!-- No hace falta indicar this.increaseBy() porque ya sabe que hace referencia a app.component.ts -->
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

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
