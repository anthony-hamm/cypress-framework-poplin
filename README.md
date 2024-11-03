# Hamm Cypress Framework 

This repo contains e2e tests written in Cypress.


## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/anthony-hamm/cypress-framework-poplin#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-framework-poplin.git

## cd into the cloned repo
cd cypress-framework

## install the node_modules
npm install

## start the local webserver
npm run cypress:wfc
```

The `npm run cypress:wfc` script will run cypress locally.

You should see the Cypress interface up and running. We are now ready to run Cypress tests.

### 3. BrowserStack Support

In order to enable browserStack support, you will need to add the following enviromental variables:

```bash
## Env Variables
${BROWSERSTACK_USERNAME}
${BROWSERSTACK_ACCESS_KEY}

## run tests in BrowserStack
npm run browserstack:wfc
```

If you get stuck, here is more help:
* [BrowserStack Manage Keys](https://www.browserstack.com/docs/iaam/security/manage-access-keys)
* [How to Add Env Variables](https://chlee.co/how-to-setup-environment-variables-for-windows-mac-and-linux/)


### 4. Add new tests!

[Follow these instructions to add new tests into the project.](https://on.cypress.io/writing-your-first-test)
