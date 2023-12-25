// La barra de búsqueda no es un page, es una pieza específica para mi app.
import { Component, ElementRef, ViewChild } from '@angular/core';

// No queremos poner NgModule solo para trabajar con un input, así que incluimos
// #txtTagInput, que es una referencia local, es decir, en este caso, el
// template (solo el template) va a conocer al input con el nombre txtTagInput
//
// Y con keyup.enter, solo se llama a la función asociada cuando se pulsa el Intro.
// Esto es una característica propia de Angular.
//
// Sin decorador @ViewChild tenemos que mandar el parámetro
//       (keyup.enter)="searchTag(txtTagInput.value)"
//
// Con decorador @ViewChild no hace falta mandarlo porque lo coge de tagInput
//        (keyup.enter)="searchTag()"
@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  // Con decorador @ViewChild
  // Queremos que tagInput sea una referencia local y directa al template HTML.
  // Para lograr esto es que se decora con @ViewChild e indicamos el selector.
  // El selector podría ser el input, pero como puede haber más de uno indicamos
  // su referencia txtTagInput.
  //
  // NOTA: Se podría usar @ViewChildren si hubiera más de un input, y regresa un
  //  arreglo con todos los elementos input.
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  // Sin usar el decorador @ViewChild
  //
  // searchTag(newTag: string) {
  //      console.log({ newTag });
  // }
  //
  // Usando el decorador @ViewChild no hace falta recibir el argumento, porque lo tenemos
  // en el elemento tagInput.
  // Al indicar this.tagInput.nativeElement tenemos acceso a todas las propiedades de, en
  // este caso, un input.
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    console.log({ newTag });
  }
}
