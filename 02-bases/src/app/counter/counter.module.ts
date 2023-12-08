import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

// Cuando trabajamos basado en módulos, nuestros componentes solo están visibles dentro del módulo.
@NgModule({
  declarations: [CounterComponent],
  // Si necesitamos exponer algo al mundo exterior, tenemos que exportarlo.
  exports: [CounterComponent],
})
export class CounterModule {}
