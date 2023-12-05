//? 01-Tipos básicos y conceptos generales

const name: string = 'Neimerc';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({ name, hpPoints, isAlive });

// Indicar este export para evitar el error:
// Cannot redeclare block-scoped variable 'name'
// Es un tema propio de Vite, no de TypeScript o Angular.
// Así tratamos este archivo como un módulo
export {};
