import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // En counter.module.ts hemos exportado al mundo exterior CounterComponent.
    // Como queremos usar ese componente aquí, tenemos que importarlo, pero
    // lo que tenemos que importar ES EL MODULO!!
    // Memorizar: Se importan los módulos
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
