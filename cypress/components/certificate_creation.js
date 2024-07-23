function generateRandomFiveDigitNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}

function generateCertificateName(baseName = "Certificate of Completion", suffixBase = "Automation") {
  const suffix = `${suffixBase} ${generateRandomFiveDigitNumber()}`;
  const certificateName = `${baseName} - ${suffix}`;
  return certificateName;
}

class certificate_creation{
    visit() {
        cy.visit("https://demoiiht.techademy.com/");
      }
      Ass_cukkies(){
          cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]').click();
      }
    
      usernamen_field(email) {
        cy.get('[name="username"]').type(email);
      }
    
      password_filed(password) {
        cy.get('[name="password"]').type(password);
      }
    
      login_button() {
          cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button').click();
      }
      certificate_dropdown(){
        cy.contains('Certificates').click({force: true});
      }
      certificate_create_button(){
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"][type="button"]').click()
      }
      certificate_name_field(certivi_name){
        cy.get('input[name="name"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type(certivi_name);
        cy.wait(5000)
      }
      learning_type_dropdown(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][aria-autocomplete="list"]').eq(0).type("{downarrow}{enter}")
      }
      techadamy_logo_toggle(){
        cy.get('input[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"][type="checkbox"]').check()
      }
      orientation_dropdown(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiStack-root.css-podk6p > div > div.MuiStack-root.css-onk8hu > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-5xku6l > div:nth-child(4) > div > div > div > div').click().type("{downarrow}{enter}")
      }
      sopncer_logo(){
        cy.get('input[id="sponsor_logo"][type="file"]', { timeout:4000}).attachFile('7111.jpg')
        cy.wait(3000);
      }
      signature_logo(){
        cy.get('input[id="stamp_or_signature"][type="file"]', { timeout:4000}).attachFile('7111.jpg')
        cy.wait(2000);
      }
      click_on_createAPI_and_view_responce(){
         // Intercept the API request
         cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/certificate/cud/').as('createCertificate');
         // Submit the form
         cy.contains('Create Certificate').click()
         // Wait for the API request and validate the response
         cy.wait('@createCertificate').then((interception) => {
          // Validate that the response status is 200
          expect(interception.response.statusCode).to.equal(200);
       cy.log(interception.response.statusCode)
       })
      }
        

  certificate_method(email,password){
    const certivi_name = generateCertificateName();
      this.visit();
      this.Ass_cukkies();
      this.usernamen_field(email);
      this.password_filed(password);
      this.login_button();
      this.certificate_dropdown();
      this.certificate_create_button();
      this.certificate_name_field(certivi_name);
      this.learning_type_dropdown();
      this.techadamy_logo_toggle();
      this.orientation_dropdown();
      this.sopncer_logo();
      this.signature_logo();
      this.click_on_createAPI_and_view_responce();
  } 
}

export default certificate_creation