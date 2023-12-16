import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // En el constructor hacemos la inyección de dependencias.
  // Luego estas properties serán privadas, pero por ahora lo ponemos público para hacer
  // referencia a dbzService en el fuente main-page.component.html
  // NOTA: No es correcto hacer referencia directamente al servicio.
  constructor(public dbzService: DbzService) {}
}
