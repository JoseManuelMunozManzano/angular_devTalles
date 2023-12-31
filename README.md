# CURSO ANGULAR DEVTALLES

Es el curso de Angular de DevTalles impartido por Fernando Herrera

- https://cursos.devtalles.com/courses/angular

Direcciones web importantes:

- https://angular.dev/
- https://angular.io/
- https://developer.mozilla.org/es/docs/Web/JavaScript

Documentación importante:

- Ver el documento angular-cheat-sheet.pdf

Importante:

- Acaba de salir la versión 17 y hay una sección explicando como se trabaja con componentes
- Pero este curso vamos a trabajarlo casi todo con módulos, a la manera tradicional
- Para crear un proyecto a la manera tradicional:
  - ng new mi-app --standalone false
  - A la pregunta enable SSR y SSG -> indicaremos N

## 01-typescript-intro

Veremos:

- Introducción a TypeScript
- Tipos básicos
- Objetos, arreglos e interfaces
- Funciones y sus argumentos
- Desestructuración de arreglos y objetos
- Importaciones y exportaciones
- Clases, constructores
- Tipos genéricos
- Decoradores
- Encadenamiento opcional
- Trabajaremos con Vite

## 02-bases

Veremos:

- Crear proyectos de Angular
- Explicar cada archivo y directorio de un proyecto
- Componentes
- Módulos
- One way data binding
- Uso del AngularCLI - Angular Command Line Interface
- Directivas creadas por Angular
- ngIf y ngIf-else
- Y más...

Como parte de la expansión de las bases de Angular veremos:

- Profundizar un poco más en los módulos
- FormsModule
- ngModel
- @Inputs
- @outputs
- Servicios
- Métodos en servicios
- Depuraciones

Como parte de despliegues a la web, veremos:

- Generar build de producción
- Desplegarlo rápidamente
- Netlify
- GitHub Pages
- npm Scripts para automatizar el proceso

Aquí aprenderemos como generar el build de producción de nuestra aplicación y la desplegaremos en la web.

El proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

## 03-gifs-app

La sección contendrá nuestra primera aplicación real de Angular, este es un breve listado de los temas fundamentales:

- Modularización de la aplicación
- Estructura de la aplicación de media a gran escala
- Componentes
- ViewChild
- Servicios
- Historial de búsquedas
- Uso de Api Keys
- LocalStorage
- Peticiones HTTP
- Animaciones mediante CSS
