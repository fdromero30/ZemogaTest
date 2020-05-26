# ZemogaTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

El desarrollo de esta aplicación fue hecho con Angular 9, y las pruebasu nitarias con Jasmine, se utilizó el localstorage para almacenar
la información correspondiente a los votos para cada persona, incluye un service en donde se consume la información de los personjes a mostrar con HTTP CLIENT de un mock ubicado en Assets.


# Assets Folder

En esta ruta se encuentran las imagnes utilizadas para la webview, y de igual manera el JSON con la estructura utilizada para cargar la información.

# Ngx Toastr

Se utiliza esta libreria de angular para mostrar el mensaje de confimación de los votos.

# Router

Se utiliza el router de Angular para redireccionar a las pantallas construidas.

#  Lazy Loading

Debido a que el tamaño de la aplicación no es muy grande, no se implemento lazy loading pero sin embargo se podría implementar la estructura modular para cargar las demás vistas, a medida que se solicite con el routing de Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
