import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // En counter.module.ts hemos exportado al mundo exterior CounterComponent.
    // Como queremos usar ese componente aquí, tenemos que importarlo, pero
    // lo que tenemos que importar ES EL MODULO!!
    // Memorizar: Se importan los módulos
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
