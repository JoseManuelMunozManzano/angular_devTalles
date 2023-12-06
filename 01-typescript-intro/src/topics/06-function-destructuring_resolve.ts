//? Desestructuración de argumentos

// Con desestructuración

interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// Solución no muy buena porque si hay muchos campos hay mucha desestructuración
// function taxCalculation({ products, tax }: TaxCalculationOptions): [number, number] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {
  // Mejor hacer aquí la desestructuración
  const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax });

console.log('Total', total);
console.log('Tax', taxTotal);

export {};
