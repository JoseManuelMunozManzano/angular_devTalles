//? Clases en TypeScript

export class Person {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

const ironman = new Person('Ironman', 'New York');
console.log(ironman);

//? Constructor de una clase
// Forma corta de definir clases en TypeScript
// En el constructor automáticamente crea las propiedades y le asigna los valores.
// Importante para la inyección de dependencias.
export class Person2 {
  constructor(public name: string, private address: string = 'No Address') {}
}

const spiderman = new Person2('Spiderman');
console.log(spiderman);
