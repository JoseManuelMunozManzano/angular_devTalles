import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // Los getters son métodos que se usan como propiedades.
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Si el método fuera private no se podría usar fuera del componente, eso incluye el HTML.
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // Este código NO entra dentro del ciclo de detección de cambios de Angular
    // Es decir, se cambian los h1, pero no cambian automáticamente las otras variables asociadas.
    //
    // document.querySelectorAll('h1')!.forEach((element) => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
