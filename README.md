# node-sass problem

NPM Install node-sass package
node-sass package requires installing of external package from github, which will cause the download to fail as proxy will block


Manually download Node Binary from https://github.com/sass/node-sass-binaries

Manually npm install the following:

> npm install -g @angular/cli@1.5.0 --sass-binary-path=<DIRECTORY_HERE>/linux-x64-57_binding.node

> npm install node-sass@4.11.0 --sass-binary-path=<DIRECTORY_HERE>/linux-x64-57_binding.node

> mkdir -p node_modules/node-sass/vendor/<Binary Filename without binding.node (i.e. linux-x64-57>/binding.node 

> cp binding.node to above file, rename file to "binding.node"

# node-sass problem end ####

# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular-hm
