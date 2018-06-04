# cucumber-chimp

Cucumber-chimp based core library for UI e2e automation and further integration with dev repositories. Based on [cadreon-console-ui-test](https://github.com/Cadreon/cadreon-console-ui-tests) project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

On your local machine you need the following software installed:
- Node.js (v8.9.2 or greater), npm (v5.5.1 or greater). Install from [nodejs.org](https://nodejs.org/en/download/)



### Installation
Install project dependencies
```
npm install
```

## Contributing
Checkout to a new development branch
```
git checkout -b <development branch>
```
Make and build your changes
```
npm install
```
> <i>dist</i> folder contains the compiled code to be accessed by referencing projects, do not ignore changes there and commit along with the rest of your changes

Create a pull request against master

## Execution
Following commands will execute the scenarios:

Execute all scenarios
```
chimp
```

Execute scenarios with a specific tag
```
chimp --tags @{something}
```
Execute scenarios with a diff browser, default has been set as chrome
```
chimp --browser=firefox
```
Execute scenarios as debug mode
```
chimp --watch
```
