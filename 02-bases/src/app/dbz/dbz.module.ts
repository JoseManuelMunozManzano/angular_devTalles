import { NgModule } from '@angular/core';
// Se puede eliminar CommonModule si no vamos a usar directivas (*ngIf, *ngFor...)
// Este módulo puede estar importado en varios lugares, pero Angular no lo importa de nuevo,
// sino que usa el que ya importó antes y tiene en memoria, por lo que no se afecta al rendimiento.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
