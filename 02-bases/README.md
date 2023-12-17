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

## Comunicación entre componentes

Se usa el decorador @Input(), que permite al componente hijo recibir una información del padre.

## Expandiendo el \*ngFor

- Si queremos obtener el índice de un elemento

```
  *ngFor="let character of characterList; let i = index"
```

Recordar que entre comillas, dentro del \*ngFor, lo que hay es JavaScript.

index ya está siendo definido en nuestro \*ngFor por defecto. Con esto, la variable i ya se puede usar.

Indicar que index empieza en cero.

- Si queremos agregar algún tipo de condición

La forma básica sería con código JavaScript como en este ejemplo, en el que obtenemos si es el primer o último elemento de la lista:

```
    <span>{{ character.power }} </span>
    <br />
    <span>Es el primero: {{ i === 0 }} </span>
    <br />
    <span>Es el último: {{ i === characterList.length - 1 }}</span>
```

Pero podemos obtener esos datos dentro del \*ngFor usando first, last, even, odd, que son otros objetos que está exponiendo el \*ngFor.

```
    *ngFor="
      let character of characterList;
      let i = index;
      let isFirst = first;
      let isLast = last;
      let isEven = even;      Si es par
      let isOdd = odd;        Si es impar
    "
    ...
    ...
    <span>Es el primero: {{ isFirst }} </span>
    <span>Es el último: {{ isLast }}</span>
```

Hay más objetos que expone el \*ngFor.
https://angular.io/api/common/NgFor

## [ngClass] - Clases basado en condiciones

Añade clases de manera condicional.

Diferentes valores de Bootstrap basado en condiciones.
https://getbootstrap.com/docs/5.3/components/list-group/#variants

Ejemplo:

```
  [ngClass]="{
    'list-group-item-dark': isLast,
    'list-group-item-primary': isEven,
  }"
```

IMPORTANTE: Al indicar llaves cuadradas, por ejemplo `[class]="'list-group-item'"`, estamos diciendo que Angular tome el control, y lo que haya tras el signo igual debe ser una expresión de JavaScript.

## FormsModule y ngModel

Hay una sección del curso dedicada a formularios porque Angular da muchas cosas para poder trabajar con ellos.

Por ahora, lo que vamos a ver es muy simple, usando Two Data Binding.

[()] a esto se le conoce como la caja de bananas. Significa que estamos asociando un evento y un atributo a la vez. Esto es la forma de usar Two Data Binding.

Cuando cambie el input cambiará la referencia del fuente .ts

Para que no de error hay que importar (imports) FormsModule en los modules donde se use el componente.

IMPORTANTE: No se recomienda el uso de Two Way Data Binding en formularios.
Two Way Data Binding es:

- Cuando en el fuente .ts se cambia el valor de una variable, este valor cambiado se refleja en el fuente .html
- Y cuando en el fuente .html se cambia el valor de una variable, este valor cambiado se refleja en el fuente .ts

Esto no es bueno hacerlo en formularios porque da lugar a efectos secundarios indeseados.

TRUCO: Un truco muy poderoso en Angular

`<pre>{{ character | json }}</pre>`

Nos devuelve, en vez de [object Object], el resultado ya como json del objeto.

## Emitir eventos al padre

Para emitir eventos del hijo al padre se usa la anotación @Output()

Aquí entra en juego las suscripciones y RxJs.

En nuestros fuentes, el componente hijo es add-character.component.ts, que emite al padre main-page.component.ts el evento onNewCharacter.

IMPORTANTE:

- Cuando queremos mandar mediante inputs información del padre al hijo usamos las llaves cuadradas []
  - [] son atributos
- Cuando queremos escuchar eventos, lo hacemos con paréntesis ()
  - () son eventos

## Formas de depurar la app

Tenemos:

- Las devtools de Angular. No son tan potentes como las de React o Vue, pero van mejorando
- console.log()
- Breakpoints
  - En VSCode
  - Con la instrucción: `debugger;` para que pare en ese punto en el navegador. Una vez ha parado en el navegador podemos añadir más breakpoints

## Servicios

Tenemos que pensar cual es el lugar correcto para mantener nuestra información, es decir, la data o el estado que se va generando mientras los usuarios usan nuestra app.

No tiene sentido que los characters estén en main-page.component.ts

Tampoco es correcto que en ese mismo fuente esté la lógica para editar esos personajes.

Esto es porque puede haber otro componente en el que se necesiten esos personajes, y va a ser muy complicado compartir esa información.

Cuando implementemos la parte del Router, sistemas de rutas, veremos que la comunicación entre padres e hijos no va a ser posible, porque en ese nivel no van a existir padres ni hijos, sino hermanos, es decir, páginas al mismo nivel, y no vamos a poder tener elementos dentro unos de otros.

Para manejar toda esta problemática tenemos los servicios: `https://angular.io/guide/singleton-services`

Inyectaremos un servicio (Inyección de dependencias) y Angular se encargará de proporcionar una instancia de ese servicio (singleton) a lo largo de toda la app.

Esto fomenta la composición en lugar de la herencia.

El objetivo del servicio que vamos a crear es que tenga la lógica de negocio para manejar los characters.

Hay muchas formas de generar un servicio:

- Manualmente
  - Lo creamos así, creando un archivo dentro de la carpeta `dbz/services` llamado `dbz.service.ts`
  - Usaremos luego el snippet `a-service`
- Usando Angular CLI
- Con la extensión Angular Schematics

## Paquetes externos - UUID

https://www.npmjs.com/package/uuid

Instalación:

```
  npm i uuid
  npm i --save-dev @types/uuid
```

Con este paquete podemos trabajar con IDs únicos en vez de con el índice del elemento, que es muy volátil.

## Generar build de producción

Ir a la carpeta del proyecto y ejecutar `npm run build`, que a su vez ejecuta el comando de Angular CLI `ng build`.

Esto genera la carpeta dist, ya con el contenido que habrá que subir a la web.

## Despliegues a Producción

### http-server

http-server es un paquete de Node que sirve para probar y montar un servidor http sin ninguna configuración.

https://www.npmjs.com/package/http-server

Para instalar de manera local al proyecto, ejecutar: `npm i -D http-server`

Una vez instalado ir a la ruta donde tenemos el build de producción del proyecto, en mi caso /dist/bases/browser, y ejecutar `npx http-server -o`

Si examinamos, veremos que ya no podemos usar, en las herramientas de desarrollo, las Angular DevTools. Esto es porque, a nivel local, está en producción, no en desarrollo.

Y en la terminal veremos distintas Urls que podemos usar para probar la app.

### Netlify

Es un servicio que nos permite desplegar rápidamente las aplicaciones, probar cosas.. y tiene un tier gratuito muy bueno.

https://www.netlify.com/

Yo hago login con mi usuario de GitHub.

Lo que haremos es arrastrar la carpeta que contiene el código, en mi caso /dist/bases/browser, en el recuadro que hay disponible para hacer el deploy de una nueva app.

La url que me ha dado ha sido: https://lovely-haupia-54c7de.netlify.app/

Se puede cambiar el nombre de la url.

Esta Url se puede compartir para que la gente pruebe, demostraciones a clientes, etc. y no hace falta pagar nada.

### GitHub Pages

GitHub Pages es un servicio extra que tiene GitHub y que sirve para servir contenido estático (el servidor no va a crear nuevos archivos)

https://github.com/

Hay que crearse un nuevo repositorio del proyecto, solo con ese proyecto. En mi caso:

https://github.com/JoseManuelMunozManzano/angular-primeros-pasos-deploy-dbz

Ahora:

- Pulsar en Setings
- En el menú de la izquierda pulsar en Pages
- En Source hay un desplegable. Se puede seleccionar:
  - De una rama. Seleccionamos este!!
  - Usando GitHub Actions (en Beta)
- Donde indica Branch, seleccionar main
- Ahora indica que se puede desplegar el /root, pero entonces intentaría desplegar el repositorio, cosa que no va a funcionar porque tenemos código. Hay que seleccionar el /docs, aunque esta carpeta no existe en nuestro repositorio
  - Tenemos que crear la carpeta docs en el proyecto, en VSCode
  - Para ello, en VSCode, cogemos la carpeta browser, que está en /dist/bases/browser y la dejamos caer en la raiz de nuestra app
  - La carpeta la renombramos a docs
  - Hacemos el commit y el push para subirlo a GitHub
  - Con esto, en nuestro repositorio ya tenemos la carpeta /docs con el contenido que queremos hacer el deploy
- Ahora podemos pulsar el botón Save a la derecha del desplegable donde hemos seleccionado /docs
- Este proceso hace una acción automática, que cada vez que hagamos un despliegue de la carpeta docs a la rama main, automáticamente va a ejecutar este proceso
- Si hacemos click en Actions, veremos la acción asociada a ese despliegue. Cuando se vea un círculo verde con una V en su interior, sabremos que ha terminado correctamente.
- Si pulsamos en el nombre de la acción veremos un cuadro con el texto deploy y la URL de la app.
- Pulsamos en esa URL, pero veremos que NO FUNCIONA, porque no logra encontrar (404) ningún archivo (ver el texto de error con F12) porque los está intentando buscarlos en la raiz (josemanuelmunozmanzano.github.io) pero la aplicación no está desplegada ahí, sino en el nombre del repositorio, es decir, sería algo así como: https://josemanuelmunozmanzano.github.io/angular-primeros-pasos-deploy-dbz/runtime.00xxxxxxxxx
  - La URL es: https://josemanuelmunozmanzano.github.io/angular-primeros-pasos-deploy-dbz/
- Hay varias maneras de solventar este problema
  - En VSCode, en la carpeta docs, en el fichero index.html, hacer el cambio siguiente:

```
    De
    <base href="/">

    A
    <base href="./">
    Para que sea relativo al path donde se encuentra
```

CUIDADO: Cada vez que se haga el build se perderá este cambio.

Volvemos a subir todo a GitHub.
Automáticamente se va a generar el GitHub Pages. VAmos a Actions y veremos la acción nueva de despliegue.
La URL que me da es: https://josemanuelmunozmanzano.github.io/angular-primeros-pasos-deploy-dbz/
Pulsamos y vemos que la página web ya funciona.

Vamos a automatizar este proceso para no tener que hacer tanta carpintería, usando los scripts de package.json.
