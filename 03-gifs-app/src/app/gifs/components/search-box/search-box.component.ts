// La barra de búsqueda no es un page, es una pieza específica para mi app.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..." />
  `,
})
export class SearchBoxComponent {
  constructor() {}
}
