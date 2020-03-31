# Angular 9 + Cypress + CircleCI

[Angular 9](https://www.angular.io) and [Cypress.io](https://www.cypress.io) integration including basic e2e automated tests and CI with [CircleCI](https://circleci.com).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running.

Install the project

```
npm i
```

and run the regular Angular 9 app

```
ng serve
```
and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Running the E2E tests with Cypress

This project has replaced Protractor with Cypress E2E automated tests. You have various ways of running E2E automated tests. 

### Regular way

As we replaced Protractor with Cypress E2E you can run it with

```
ng e2e
```
or
```
npm run e2e
```
to build an app and open Cypress dashboard from which you can execute the end-to-end tests.
### Cypress way

You can use regular Cypress commands like

```
cypress open
```
or
```
cypress run
```
### Magic way

You can use custom script to run app and test automatically.

```
npm run e2e:ci
```
## Deployment
CircleCI provides built-in integration with GitHub repository. You need to log in using your GitHub account and pickup a repo for a new project. Then you need to add config.yml file to your project CircleCI setup.

```YAML
version: 2.1
orbs:
  # This Orb includes the following:
  # - checkout current repository
  # - npm install with caching
  # - start the server
  # - wait for the server to respond
  # - run Cypress tests
  # - store videos and screenshots as artifacts on CircleCI
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
          start: npm start
          wait-on: 'http://localhost:4200'
          store_artifacts: true
```

## Built With

* [Angular 9](https://www.angular.io) - with ng-cli v9 support
* [Cypress.io](https://www.cypress.io) - JavaScript E2E test automation framework
* [CircleCI](https://circleci.com) - Continous Integration tool

## Authors

* **Sebastian Gos** - *Initial work* 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
