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
// de usar templateUrl y hacer referencia a un html, pero esto no se usa.
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
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>',
})
export class CounterComponent {}
