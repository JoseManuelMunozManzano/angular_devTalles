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
}
