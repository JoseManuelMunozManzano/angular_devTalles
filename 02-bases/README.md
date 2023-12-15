# 02-bases

Proyecto creado con el comando: `ng new bases --standalone false`

- stylesheet: CSS
- enable SSR and SSG: N

Luego sustituimos el nombre a 02-bases

Si descargamos el fuente de GitHub, primero instalar los módulos de node: `npm i`

### Ejecución del proyecto usando el CLI

Para ver como luce el proyecto en modo desarrollo, desde la terminal ejecutar el comando CLI: `ng serve`

Ir a la ruta indicada en la terminal: `http://localhost:4200/`

Para cancelar la ejecución pulsar Ctrl+C

Si queremos ejecutar el proyecto en modo desarrollo y que automáticamente nos abra el proyecto en el navegador, ejecutar el comando CLI: `ng serve -o`

### Ejecución del proyecto usando npm

Lo primero que vamos a hacer es ir al fuente package.json y sustituir, en "scripts" lo siguiente:

```
  "scripts": {
    ...
    "start": "ng serve -o",
    ...
  }
```

Y para ejecutar nuestro proyecto ejecutaremos: `npm start`

### Estructura de ficheros del proyecto

Ir a la ruta siguiente: https://angular.io/guide/file-structure

### Formas de crear componentes independientes

Usando la extensión Angular Snippets podemos, en un fichero recién creado y vacío, escribir: `a-component` y pulsar Tab.

Para ver todos los snippets disponibles escribir `a-`

## Manejo de estructura de directorios o filesystem del proyecto

Hay muchas maneras de organizar nuestra app de forma lógica.

A lo largo del curso vamos a hacerlo de varias maneras.

En este proyecto lo vamos a hacer de una forma que se utiliza muchísimo: Basado en módulos

Cada una de las carpetas que tenemos dentro del directorio app van a ser módulos independientes, que van a funcionar cada uno por si solos, encapsulados.

El ejemplo que se ve en este proyecto está en la carpeta app/heroes

A su vez, dentro de heroes tendremos la carpeta /hero (un hero) y /list (un listado de heroes)

Para no tener que escribir el código repetitivo para crear todos los fuentes necesarios, podemos usar el Angular CLI.

```
  ng g c heroes/hero
```

Este mandato crea las carpetas y todos los fuentes necesarios:

- hero.component.css
- hero.component.html
- hero.component.spec.ts
- hero.component.ts

Y actualiza:

- app.module.ts

E igual para /list

```
  ng g c heroes/list
```

## Interpolación de valores

Ir a la ruta siguiente: https://angular.io/guide/interpolation

## Enlazado en una sola vía (One way data binding)

One way data binding se refiere a que, al cambiar un valor de variable en el componente, se actualiza el valor en el template html.

Angular maneja el two way data binding, es decir, si cambio desde el lado del template html una variable, también se actualiza esa variable en el componente.

En las aplicaciones de Angular hay que tratar de priorizar el one way data binding.

De todas formas, Angular es capaz de evitar bucles infinitos en el que un cambio en el template fuerza un cambio en el componente, que fuerza de nuevo el cambio en el template...

## Módulos en Angular

El módulo en sí mismo es un encapsulador. Encapsula una funcionalidad de tal manera que, si necesito compartirla, me facilita la existencia y me protege el módulo del mundo exterior.

Cualquier aplicación de Angular DEBE tener más de un módulo (salvo que la app sea super pequeña)

Como ya es un poco grande, vamos a separar los componentes que aparecen en app.module.ts.

Se pueden crear módulos en Angular usando el CLI, mediante snippets (a-module), o manualmente.

Dentro de la carpeta counter, vamos a crearnos otra carpeta llamada components.

Dentro de la carpeta components vamos a crear otra carpeta llamada counter y arrastramos el fuente counter.components.ts a su interior.

La idea de nuestro módulo personalizado es que me sirva para agrupar todo lo relacionado a counter.

Creamos un archivo en app/counter llamado counter.module.ts y llevamos ahí la definición de los componentes de counter.

En este nuevo módulo exportaremos los COMPONENTES, otros MÓDULOS o lo que queramos exponer al mundo exterior, e importaremos el nuevo MÓDULO dentro de los módulos donde queramos usar esos componentes.

Así se separan componentes en distintos módulos.

NOTA: Si se usan directivas (*ngIf, *ngFor...), en estos módulos nuevos tenemos que importar CommonModule.
Y como apunte indicar que también funciona si se importa BrowserModule.

## Módulo DBZ (Dragon Ball Z) creado con CLI, y creación manual de carpetas/ficheros

Vamos a crear un módulo con personajes de Dragon Ball Z.

Abrir la terminal integrada en VSCode y en la carpeta del proyecto escribir:

```
  ng g m dbz
```

Esto genera en el proyecto una carpeta dbz y dentro un fichero llamado `dbz.module.ts`

Creamos manualmente las carpetas components, interfaces, pages y services, dentro de la carpeta dbz.

Dentro de la carpeta pages, vamos a crear un componente (una página, el router) en el cual se puedan agrupar todos los demás componentes.

Lo llamamos main-page.component.ts, y, para empezar a codificar rápido, usamos el snippet `a-component`

Le ponemos como nombre al componente `MainPageComponent`, como selector `app-dbz-main-page` y como templateUrl `./main-page.component.html`

También creamos el template-url con nombre `main-page.component.html`

En dbz.module.ts, en declarations, indicamos MainPageComponent y lo exportamos también (exports)

En `app.module.ts` importamos (en imports) el módulo DbzModule.

En `app.component.html` hacemos uso del componente indicando `<app-dbz-main-page></app-dbz-main-page>`

## Generando componente usando VSCode y la extensión Angular Schematics

Si, usando VSCode, nos vamos a la carpeta /dbz/components y pulsamos botón derecho sobre el, aparecerá un menú flotante.

Seleccionar Angular Schematics: Generate a file

Seleccionar Component

Confirmar que el path es el correcto y escribir el nombre que queremos, en este caso `list`

Indicar los módulos a importar y confirmar.

A mi esto no me acaba de funcionar bien porque no me genera todos los ficheros, solo el .ts y el .css

Con el CLI se puede ejecutar: `ng g c dbz/components/list` y ya si me genera los 4 ficheros, el .css, el .html. el .spec.ts y el .ts

Se actualiza automáticamente nuestro módulo dbz.module.ts (en las declarations)

Le cambiamos el nombre del módulo, en selector, para que en vez de `selector: 'app-list'` indicar `selector: 'dbz-list'`

Así, las personas que vean dbz- sabrán que el módulo es dbz
