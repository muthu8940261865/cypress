import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//                 To Get token 
/*Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://idp-prod-iris.azurewebsites.net/api/TokenAuth/Authenticate', 
      body: {
        userNameOrEmailAddress: 'dhakshn@mailinator.com', 
        password: 'superadmin@app.com', 
        rememberClient: true,
        tenancyName: "demoiiht"
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
      const token = response.body.accessToken; 
      cy.wrap(token).as('authToken'); 
      cy.log('IDP Token:', token); 
    });
  });*/
  /*             Auto Generat course name
  Cypress.Commands.add('generateCourseName', () => {
    const randomSuffix = Math.random().toString(36).substring(2, 15);
    const courseName = `API Test Automation auto ${randomSuffix}`;
    cy.wrap(courseName).as('courseName');
  });*/
  // cypress/support/commands.js

/* Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://idp-prod-iris.azurewebsites.net/api/TokenAuth/Authenticate', // replace with your auth endpoint
      body: {
        // your auth request body
        userNameOrEmailAddress: 'dhakshn@mailinator.com', 
        password: 'superadmin@app.com', 
        rememberClient: true,
        tenancyName: "demoiiht"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const token = response.body.token;
      Cypress.env('authToken', token);
      cy.log(token)
    });
  });*/
  // cypress/support/commands.js
// cypress/support/commands.js
// cypress/support/commands.js
/*const player = require('play-sound')();

Cypress.Commands.add('playAlarmSound', () => {
  player.play('sounds/alarm.mp3', (err) => {
    if (err) {
      console.error('Failed to play alarm sound:', err);
    } else {
      console.log('Alarm sound played successfully.');
    }
  });
});*/



  


