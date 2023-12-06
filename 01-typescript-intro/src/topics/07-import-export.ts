//? Importaciones y exportaciones
// Funcionalidad encapsulada y se exporta lo que se expone al mundo exterior.

import { type Product, taxCalculation } from './06-function-destructuring_resolve';

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'iPad',
    price: 150,
  },
];

// Tax = 0.15
const [total, tax] = taxCalculation({ tax: 0.15, products: shoppingCart });

console.log('Total', total);
console.log('Tax', tax);
