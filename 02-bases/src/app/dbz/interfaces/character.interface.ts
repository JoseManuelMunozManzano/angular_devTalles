// Las interfaces NO se importan en el módulo, porque NO se transpilan a nada en JavaScript, desaparecen.
export interface Character {
  // Lo hemos indicado como opcional básicamente para no tener que "arreglar" toda la aplicación
  id?: string;
  name: string;
  power: number;
}
