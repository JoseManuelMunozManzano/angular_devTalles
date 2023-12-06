//? Encadenamiento opcional

// Exportamos para transformar este archivo en un módulo, no porque realmente
// queramos exportar Passenger.
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'José M.',
};

const passenger2: Passenger = {
  name: 'Tania',
  children: ['Antonio', 'Alma'],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  // Optional Chaining: comentar esto y children! (con !) y descomentar children? (con ?)
  // Non-null assertion operator: descomentar esto y children! y comentar children?
  //
  // if (!passenger.children) return 0;

  // Con Optional Chaining
  // Si existe children dame el .length
  //
  // En este ejemplo, si no existe, devuelve undefined y con el || 0 devolvemos 0.
  //
  const howManyChildren = passenger.children?.length || 0;
  //
  // Non-null assertion operator
  // Si estamos 100% seguros de que va a haber children, utilizamos !
  // Decimos a TypScript que confíe en nosotros, que siempre va a haber children.
  //
  // const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);
