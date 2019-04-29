# Demonstration - Testing Angular application

The purpose of this application is to demonstrate 3 differents types of tests using automated tools :

- Unit tests (Jasmine, Karma)
- End-to-end tests / Integration tests (Protractor)
- Acceptance tests (Selenium)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Continuous integration status on Master Branch

[![Build Status](https://travis-ci.com/joscelynjean/demo-testing-angular-app.svg?branch=master)](https://travis-ci.com/joscelynjean/demo-testing-angular-app)

[![Maintainability](https://api.codeclimate.com/v1/badges/67691ac405745cdf1d42/maintainability)](https://codeclimate.com/github/joscelynjean/demo-testing-angular-app/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/67691ac405745cdf1d42/test_coverage)](https://codeclimate.com/github/joscelynjean/demo-testing-angular-app/test_coverage)

## Running tests

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests / integration tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running acceptance tests using Selenium

Download and install the [Selenium IDE](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd) from Google Chrome web store.

To run the tests, open the `selenium/demo-testing-angular-app.side` file from the IDE.

You must run an instance of the application server and the API :

```bash
npm run api
npm start
```

For tutorial on using Selenium, check out Guru99 [Selenium Tutorial for Beginners: Learn WebDriver in 7 Days](https://www.guru99.com/selenium-tutorial.html).

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
