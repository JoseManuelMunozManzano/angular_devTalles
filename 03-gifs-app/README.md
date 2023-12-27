# 03-gifs-app

Proyecto creado con el comando: `ng new gifs-app --standalone false`

NOTA: Cuidado, parece que este comando no genera app.module.ts. `npm init @angular gifs-app --standalone false`

- stylesheet: CSS
- enable SSR and SSG: N

Luego sustituimos el nombre a 03-gifs-app

Si descargamos el fuente de GitHub, primero instalar los módulos de node: `npm i`

## Uso de Bootstrap

Hemos ido a la página de Bootstrap y hemos copiado el link del CDN. Lo hemos pegado en el fuente index.html.

https://getbootstrap.com/

## Ejecución

El fuente giphy-api.service.copy.ts hay que renombrarlo a giphy-api.service.ts e incluir la api key correcta.

Se ha modificado el script start para que ejecute `ng serve -o`

Accedemos a la carpeta del proyecto y ejecutamos: `ng serve -o` o `npm start`

## Diseño y estructura inicial del proyecto

Aunque Angular da cierta estructura de directorios, al final dicha estructura va a depender de como queramos hacerlo.

Estos consejos que aquí aparecen son muy útiles para aplicaciones medianas y grandes.

La idea es hacer módulos reutilizables y con responsabilidades únicas, separadas por FUNCIONALIDAD.

- Se ha creado una carpeta gifs, y ahí pondremos todo lo que esté relacionado con los gifs
  - Components
  - Services
  - Functions
  - Helpers
  - Pages
- Se ha creado otra carpeta llamada shared, y ahí pondremos todo lo que no tiene que ver con los gifs
  - Barra de navegación (navbar)
  - Sidebar
  - Componentes reutilizables en otros módulos

Creamos, usando el Angular CLI, y estando en la carpeta del proyecto, el módulo gifs: `ng g m gifs`

NOTA: Si no existiera la carpeta gifs, el comando lo crea.

Creamos, usando el Angular CLI, y estando en la carpeta del proyecto, el módulo shared: `ng g m shared`

Importamos, en app.module.ts, los módulos GifsModule y SharedModule, ya que no se hace automáticamente.

Creamos la carpeta shared/components y ejecutamos el comando CLI: `ng g component shared/components/sidebar`

Veremos que automáticamente se declara (en declaracions) en shared.module.ts.

También lo exportaremos, porque queremos usarlo en el módulo principal.

Esta es la idea principal de trabajo para gifs, salvo que en gifs también tendremos carpetas services, helpers y pages.

Esta es la estructura que se va a usar en el proyecto.

Indicar que, en proyectos más grandes, toda la interfaz de usuario, por ahora gifs y shared, podría moverse a una capa de presentación, y tendríamos todo lo demás como core, usecases, mappers...

La idea es que lo que tenemos ahora es escalable.

## Giphy Api Key

https://developers.giphy.com/

El fuente giphy-api.service.copy.ts hay que renombrarlo a giphy-api.service.ts e incluir la api key correcta.

## Realizar una petición HTTP

Hay muchas formas de realizar peticiones HTTP usando Angular.

Angular viene con su propio paquete y componente para ello, basado en Observables.
