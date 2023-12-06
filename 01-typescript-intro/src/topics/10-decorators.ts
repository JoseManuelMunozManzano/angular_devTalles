//? Decoradores
// https://www.typescriptlang.org/docs/handbook/decorators.html
// Son funciones especiales que se adjuntan a las clases, propiedades o métodos de las clases y
// modifican su comportamiento.
// En Angular suelen usarse más que crearse (muy muy raro).
// Por contra, en Nest si que suelen crearse decoradores.

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = 'Abc123';

  print() {
    console.log('Hola Mundo');
  }
}

// Estamos imprimiendo la definición de la clase.
// Comentar la línea del decorador @classDecorator para ver como varía el hecho de ponerlo / quitarlo
console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
