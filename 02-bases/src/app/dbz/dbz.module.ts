import { NgModule } from '@angular/core';
// Se puede eliminar CommonModule si no vamos a usar directivas (*ngIf, *ngFor...)
// Este módulo puede estar importado en varios lugares, pero Angular no lo importa de nuevo,
// sino que usa el que ya importó antes y tiene en memoria, por lo que no se afecta al rendimiento.
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
