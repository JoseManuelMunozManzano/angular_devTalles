# 02-bases

Proyecto creado con el comando: `ng new bases --standalone false`

- stylesheet: CSS
- enable SSR and SSG: N

Luego sustituimos el nombre a 02-bases

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
