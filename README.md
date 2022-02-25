# QADEMO


Currently the tests are writen using [Cypress](https://www.cypress.io/). It's recommended you learn their documentation.
The tests are run automatically after every successful deployment of the accounts frontend/backend to staging.

# project general information

repository for testing https://demoqa.com/automation-practice-form. This project does not require any credentials or TOKEN
# cypress installation commands for those who will do it 1st time:

Install Cypress via npm:
This will install Cypress locally as a dev dependency for project.
`npm install cypress --save-dev`
Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of project
to ensure cypress is installed in the correct directory.

# to install cypress globally

Apply -g in the install command to install package globally. `npm install cypress -g`

# npm commands

First ensure you have the version of node that is used and implemented by Project owner (Q/A)
To check the current version of node: `node --version`

# project level commands

If you want to run the tests only in Terminal, without opening the Cypress UI, you can execute `npx cypress run`

# Due to project requires some file upload we need below package to install


` npm install --save-dev cypress-file-upload`

# steps:

1. node plugin installation in jenkins

# jenkins jobs

1.` npm install`
2. `npm run cypress`

# to open test runner:

1. `npx cypress open`
2. click spec file
3. on browser - commands section - click Add commands or Add new test

# how do I run Cypress test in headless mode?

To run the tests in headless mode, use the `cypress run` command. And, if you want to run only one specific `spec` file,
you can pass it as an argument to the `cypress run` command (see below).
`cypress run --spec cypress/integration/example.spec.js`
Note: It is necessary to prefix the above commands with npx when executing them locally if they are not npm scripts.
