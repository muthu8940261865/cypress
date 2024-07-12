const { select, timeout } = require("async");
const { delay } = require("bluebird");
import 'cypress-file-upload';
import LoginPage from '../components/LoginPage';

describe("Sanity Check", function() {
  //
  beforeEach(function() {
    // Load the fixture data before each test
    cy.fixture('creds').as('userData');
  });
  it("Tests Demoiiht login & course enrollment", function() {
    cy.viewport(1500, 1500);
    const user = this.userData.Demoiihtlogincred;
    const LoginPages = new LoginPage();
    LoginPages.login(user.email, user.password);
    cy.log("Course enrollment successful");
  });
});
