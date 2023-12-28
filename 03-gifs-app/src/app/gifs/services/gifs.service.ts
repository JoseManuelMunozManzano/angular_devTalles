import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GIPHY_API_KEY } from './giphy-api.service';
import type { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// Al indicar root, GifsService estará disponible en todos los módulos de toda la app
// que inyecten este servicio. Esto está desde Angular 6
// Si no indicamos provideIn, entonces, en gifs.module.ts, en @NgModule habrá que indicar
// providers: [GifsService]
// Y si queremos usarlo fuera tendremos que ponerlo también en exports
@Injectable({ providedIn: 'root' })
export class GifsService {
  // Esta lista es muy volátil y por eso no hacemos un getter con el operador
  // spread para pasar una copia. Eso si, se podría hacer.
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  // Inyectamos el servicio para hacer peticiones HTTP
  constructor(private http: HttpClient) {}

  // Como el arreglo pasa por referencia, para evitar que se pueda manipular
  // usamos el operador spread para retornar una copia.
  // No es que haya que hacerlo siempre así, pero en este caso queremos
  // romper la referencia de JavaScript.
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    // Si existe el tag lo removemos y lo ponemos al inicio
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    // Solo dejamos 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    // Así se haría una petición HTTP en JavaScript (La función sería async y devolvería Promise<void>)
    // Funciona perfectamente en Angular.
    // const resp = await fetch(
    //   `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`
    // );
    // const data = await resp.json();
    // console.log(data);
    //
    // Pero Angular viene con una forma propia de hacer peticiones HTTP. Hay que
    // importarlo en app.module.ts porque podemos usarlo en muchos sitios, y ahí
    // lo hacemos disponible a toda la app.
    // Y lo hemos inyectado en nuestro constructor.

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });
      });
  }
}
