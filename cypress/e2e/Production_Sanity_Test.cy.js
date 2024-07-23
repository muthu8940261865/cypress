const { select, timeout } = require("async");
const { delay } = require("bluebird");
// cy.get('blablabal').Scrollintoview -> used to scroll and find the element
//cy.get('input[id="sponsor_logo"][type="file"]').attachFile('7111.jpg') -> File attachment
import 'cypress-file-upload';
import LoginPage from '../components/LoginPage'
import reportgeneratoin from '../components/reportgeneration';
import user_and_usergroup_creatoin from '../components/user_and_usergroup_creatoin';
import certificate_creation from '../components/certificate_creation';
import catalogue_creation from '../components/catalogue_creation';

describe("Sanity Check", () => {
  beforeEach(function() {
    // Load the fixture data before each test
    cy.fixture('creds').as('userData');
  });

  it.skip("Tests Demoiiht login & course enrollment", function() {
    cy.viewport(1500, 1500);
    const user = this.userData.Demoiihtlogincred;
    console.log(user)
    const loginandassign=new LoginPage();
    loginandassign.login(user.email,user.password);
  })
  it.skip("Repoer generation", function() {
    cy.viewport(1500, 1500);
    const user = this.userData.Demoiihtlogincred;
    const repgen= new reportgeneratoin();
    repgen.repgenmethod(user.email,user.password)
    cy.log("report generated successfully")
  })
  it.skip("certificate Creation", function(){
    cy.viewport(1500, 1500);
    const users = this.userData.Demoiihtlogincred;
    const certificateee = new certificate_creation();
    certificateee.certificate_method(users.email,users.password);
    cy.wait(5000)
   });
   it.skip("Catalogue_creation", function(){
    cy.viewport(1500,1500)
    const user = this.userData.Demoiihtlogincred;
    const catalogue_creations = new catalogue_creation();
    catalogue_creations.catalogue_creation_method(user.email,user.password)

   })

  it.skip("User & UserGroup Creation", function() {
    cy.viewport(1500, 1500);
    const user = this.userData.Demoiihtlogincred;
    const user_and_usergroup_creatoins= new user_and_usergroup_creatoin();
    user_and_usergroup_creatoins.create_method(user.email,user.password)
    cy.log("User and User group created successfully");
    /*cy.visit("https://demoiiht.techademy.com/")
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]').click()
    cy.get('[name="username"]').click().type(user.email)
    cy.get('[name="password"]').type(user.password)
    cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button').click()
    //cy.get('#basic-button', { timeout:10000 }).trigger('mouseover');
    cy.contains('Users').click({force: true})
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"]').click()
    function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }
    
    function generateYopmailEmail(username) {
      return `${username}@yopmail.com`;
    }
    
    function generateSurname(username) {
      return username.charAt(0).toUpperCase();
    }
    const username = generateRandomString(10);
    const dummyEmail = generateYopmailEmail(username);
    const surname = generateSurname(username);
    cy.log('Generated username:', username);
    cy.log('Generated dummy Yopmail email:', dummyEmail);
    cy.log('Generated surname:', surname);    
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="first_name"]').type(username)
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="last_name"]').type(surname)
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="email"]').type(dummyEmail)
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][id="combo-box-demo"]').click().type("{downarrow}{enter}")
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-1x5jdmq"][id="combo-box-demo"]').click().type("{downarrow}{downarrow}{enter}")
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="user_id_number"]').type(username)
    cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div.MuiStack-root.css-1tw8rvx > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.css-seuxbh').click()
    cy.get('[class="MuiDataGrid-cellContent"][role="presentation"]').eq(1).should("have.text", dummyEmail)
    cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-5u1gyh > div > div').contains('User Groups').click()
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"][type="button"]').click()
    const usernamegroup = generateRandomString(5);
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(usernamegroup)
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="group_id"]').type(usernamegroup)
    cy.get('input[id="tags-filled"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"]').click().type("{downarrow}{enter}")
    cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/access/control/user/group/cud/').as('usergroup_creation')
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth css-seuxbh"][type="submit"]').click()
    cy.wait('@usergroup_creation').then((interception) => {
      // Validate that the response status is 201
      expect(interception.response.statusCode).to.equal(201);
    cy.log(interception.response.statusCode)
    cy.wait(5000)*/
    })
  })
 
    it("course creation", () => {
    cy.viewport(1500, 1500);
    cy.visit("https://demoiiht.techademy.com/internal-login")
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]').click()
    cy.get('[name="username"]').click().type("darshan.kumar@mailinator.com")
    cy.get('[name="password"]').type("Tr0ngP@ssw0rd!")
    cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button').click()
    cy.get('[class="MuiStack-root css-6nwsio"][id="basic-button"]').eq(1).trigger('mouseover');
    cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm').contains('Courses & Paths').click()
    cy.contains('CREATE').click()
    function generateRandomWord(wordArray) {
      return wordArray[Math.floor(Math.random() * wordArray.length)];
    }
    function generateCatalogueName() {
      const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
      const nouns = ['1', '2', '3', '4', '5', '6', '7', '8'];
      const suf = "Automation Course"
      
      const randomAdjective = generateRandomWord(adjectives);
      const randomNoun = generateRandomWord(nouns);
      
      return `${randomAdjective} ${randomNoun} ${suf}`;
    }
    cy.log(generateCatalogueName())
    cy.get('input[name="name"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type(generateCatalogueName())
    cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div:nth-child(2) > div > div > div:nth-child(4) > div > div > div > div > div > button > svg').click().type("{downarrow}{downarrow}{enter}")
    cy.get('[name="learning_points"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type("4")
    cy.get('[name="rating"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type("44")
    cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
    cy.wait(2000)
    cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/course/cud/').as('course_creation', {timeout:10000})
    cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
    cy.wait(2000)
    cy.wait('@course_creation').then((interception) => {
      // Validate that the response status is 201
      expect(interception.response.statusCode).to.equal(201);
      cy.log(interception.response.statusCode)
    })
    cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
    cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
    cy.wait(2000)
    cy.contains('CREATE', {timeout:10000} ).click()
    cy.wait(5000)   
});
it.skip('LP Creation', () =>{
  cy.viewport(1500,1500)
    cy.visit("https://demoiiht.techademy.com/")
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]',{timeout:10000}).click()
    cy.get('[name="username"]',{timeout:10000}).click().type("darshan.kumar@mailinator.com")
    cy.get('[name="password"]',{timeout:10000}).type("Tr0ngP@ssw0rd!")
    cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button',{timeout:10000}).click()
    cy.get('[class="MuiStack-root css-6nwsio"][id="basic-button"]',{timeout:10000}).eq(1).trigger('mouseover');
    cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm',{timeout:10000}).contains('Courses & Paths').click()
    cy.get('div[class="MuiTabs-flexContainer css-k008qs"][role="tablist"]',{timeout:10000}).contains('Learning Path').click()
    cy.contains('CREATE').click()
    function generateRandomWord(wordArray) {
      return wordArray[Math.floor(Math.random() * wordArray.length)];
    }
    function generateCatalogueName() {
      const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
      const nouns = ['1', '2', '3', '4', '5', '6', '7', '8'];
      const suf = "Automation LP"
      
      const randomAdjective = generateRandomWord(adjectives);
      const randomNoun = generateRandomWord(nouns);
      
      return `${randomAdjective} ${randomNoun} ${suf}`;
    }
    cy.log(generateCatalogueName())
    cy.get('[name="name"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type(generateCatalogueName())
    cy.wait(1000)
    cy.get('[name="learning_points"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type("44")
    cy.get('input[name="rating"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type("4")
    cy.wait(1000)
    cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div:nth-child(2) > div:nth-child(10) > div > div > div > div > div > button').click().type("{downarrow}{downarrow}{enter}")
    cy.wait(1000)
    cy.contains('SAVE AND NEXT').click()
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][role="combobox"]').click().type("{downarrow}{downarrow}{enter}")
    cy.wait(1000)
    cy.get('input[placeholder="Role"][class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-1x5jdmq"]').click().type("{downarrow}{downarrow}{enter}")
    cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/learning-path/cud/').as('LP_Creation')
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge css-xlmuuu"][type="submit"]').click()
    cy.wait(5000)
    cy.wait('@LP_Creation').then((interception) => {
      // Validate that the response status is 201
    expect(interception.response.statusCode).to.equal(201);
    cy.log(interception.response.statusCode)
   })
    cy.contains('SAVE AND NEXT', {timeout:10000}).click()
    cy.contains('SAVE AND NEXT', {timeout:10000}).click()
    cy.contains('SAVE AND NEXT', {timeout:10000}).click()
    cy.contains('CREATE', {timeout:10000}).click()
    
    cy.wait(5000)
    //cy.wait(5000)*/
   /* const requestBody = {
      catalogue: [],
      category: "46",
      certificate: null,
      code: null,
      description: null,
      end_date: null,
      feedback_template: [],
      forums: [],
      hashtag: [],
      highlight: [],
      image: null,
      is_active: 'true',
      is_archive: false,
      is_assign_expert: false,
      is_certificate_enabled: false,
      is_dependencies_sequential: false,
      is_draft: false,
      is_feedback_enabled: false,
      is_feedback_mandatory: false,
      is_forum_enabled: false,
      is_help_section_enabled: false,
      is_popular: false,
      is_rating_enabled: false,
      is_recommended: false,
      is_technical_support_enabled: false,
      is_trending: false,
      language: null,
      learning_points: "34",
      learning_type: "basic",
      name: "API Test Automation auto 1234",
      prerequisite: null,
      proficiency: null,
      rating: null,
      role: [],
      skill: [],
      start_date: null,
    };
      cy.request({
        method: 'POST',
        url: 'https://core-prod-api.techademy.com/api/v1/learning-path/cud/', // This is relative to the baseUrl set in cypress.json or cypress.env.json
        body: requestBody,
        headers: {        
          'Content-Type': 'application/json',
          'Idp-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiNzM0NzA2IiwiZGhha3NobkBtYWlsaW5hdG9yLmNvbSJdLCJuYW1lIjoiZGhha3NobkBtYWlsaW5hdG9yLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiRUIyNUQ2MjYtRTIxQy00Rjc0LTlDMjYtRDAzODhDRDIzRDgzIiwicm9sZSI6IlRlbmFudFVzZXIiLCJ0ZW5hbnRfSWQiOiI2MzIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy91cG4iOiJkaGFrc2huQG1haWxpbmF0b3IuY29tIiwianRpIjoiOTM5ZjI0MmMtZGVmOS00N2ZkLTg1M2YtNDE1NzI0YmRkNmQ4IiwiaWF0IjoxNzE5ODI4OTAxLCJuYmYiOjE3MTk4Mjg5MDEsImV4cCI6MTcxOTkxNTMwMSwiaXNzIjoiaHR0cHM6Ly9pZHAtcHJvZC1pcmlzLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiZGVmYXVsdC1hcGkifQ.TRk8K7mVF9XvjwbSHPbcSQLIKUiExZATGcfdx7nrbJsoVXCXxY5WtLJP8glPpwmTu3uAMgMZHpvfF0gY_g0LJMWz3INF9ZO4DpjmWPPJzHkcBGtq-ZDi2k31kP9pt6Xwv12Ew19fXlUYx3EyW90d_VLKFwP5i9i8bMxZALg6Da6EopJp_uB5kiZEEWSQyKjaVlXmtigj_ymcI3nHYQY0xQpW9Ri3ktqT3M4w00mBezgfS4wVinVlfg9_bPUEiuCnvRvWaATcCEm8dPRtnQ6gQ4ouJ1d7hNTKO6vFV2OLvz9KR2KyZ_kRxi8eSBCSG35SLR-YTV47iIYADowAvD4nlg',
        }
      }).then((response) => {
        // Assert the status code
        expect(response.status).to.eq(201);
        cy.log(response.status)
      })*/
      
    })
    it.skip('ALP_Creation', () => {
      cy.viewport(1500,1500)
      cy.visit("https://demoiiht.techademy.com/")
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]',{timeout:10000}).click()
      cy.get('[name="username"]',{timeout:10000}).click().type("darshan.kumar@mailinator.com")
      cy.get('[name="password"]',{timeout:10000}).type("Tr0ngP@ssw0rd!")
      cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button',{timeout:10000}).click()
      cy.get('[class="MuiStack-root css-6nwsio"][id="basic-button"]',{timeout:10000}).eq(1).trigger('mouseover');
      cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm',{timeout:10000}).contains('Courses & Paths').click()
      cy.get('div[class="MuiTabs-flexContainer css-k008qs"][role="tablist"]',{timeout:10000}).contains('Advanced Learning Path').click()
      cy.contains('CREATE').click()
      function generateRandomWord(wordArray) {
        return wordArray[Math.floor(Math.random() * wordArray.length)];
      }
      function generateCatalogueName() {
        const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
        const nouns = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const suf = "Automation ALP"
        
        const randomAdjective = generateRandomWord(adjectives);
        const randomNoun = generateRandomWord(nouns);
        
        return `${randomAdjective} ${randomNoun} ${suf}`;
      }
      cy.log(generateCatalogueName())
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(generateCatalogueName())
      cy.get('#combo-box-demo').click().type("{downarrow}{downarrow}{enter}")
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="learning_points"]').type('55')
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][type="text"][id="combo-box-demo"]').eq(2).click().type("{downarrow}{downarrow}{enter}")
      cy.contains('SAVE AND NEXT').click()
      cy.wait(2000)
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][type="text"][id="combo-box-demo"]').click().type("{downarrow}{downarrow}{enter}")
      cy.get('input[placeholder="Role"][class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-1x5jdmq"]').click().type("{downarrow}{downarrow}{enter}")
      cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/advanced-learning-path/cud/').as('ALP_Creation')
      cy.contains('SAVE AND NEXT').click()
      cy.wait(5000)
      cy.wait('@ALP_Creation').then((interception)=>{
        expect(interception.response.statusCode).to.equal(201)
        cy.log(interception.response.statusCode)
      })
      cy.contains('SAVE AND NEXT').click()
      cy.wait(2000)
      cy.contains('SAVE AND NEXT').click()
      cy.wait(2000)
      cy.contains('SAVE AND NEXT').click()
      cy.wait(2000)
      cy.contains('CREATE').click()
      cy.wait(5000)
    })
    it.skip('ST_Creation', () => {
      cy.viewport(1500,1500)
      cy.visit("https://demoiiht.techademy.com/")
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]',{timeout:10000}).click()
      cy.get('[name="username"]',{timeout:10000}).click().type("darshan.kumar@mailinator.com")
      cy.get('[name="password"]',{timeout:10000}).type("Tr0ngP@ssw0rd!")
      cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button',{timeout:10000}).click()
      cy.get('[class="MuiStack-root css-6nwsio"][id="basic-button"]',{timeout:10000}).eq(1).trigger('mouseover');
      cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm',{timeout:10000}).contains('Courses & Paths').click()
      cy.get('div[class="MuiTabs-flexContainer css-k008qs"][role="tablist"]',{timeout:10000}).contains('Skill Traveller').click()
      cy.contains('CREATE').click()
      function generateRandomWord(wordArray) {
        return wordArray[Math.floor(Math.random() * wordArray.length)];
      }
      function generateSTName() {
        const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
        const nouns = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const suf = "Automation ST"
        
        const randomAdjective = generateRandomWord(adjectives);
        const randomNoun = generateRandomWord(nouns);
        
        return `${randomAdjective} ${randomNoun} ${suf}`;
      }
      cy.log(generateSTName())
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(generateSTName())
      cy.get('#combo-box-demo').click().type("{downarrow}{downarrow}{enter}")
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="learning_points"]').type('55')
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][type="text"][id="combo-box-demo"]').eq(2).click().type("{downarrow}{downarrow}{enter}")
      cy.contains('SAVE AND NEXT').click()
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][type="text"][id="combo-box-demo"]', {timeout:10000}).click().type("{downarrow}{downarrow}{enter}")
      cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div > div', {timeout:10000}).click().type("{downarrow}{downarrow}{enter}")/////////
      cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/skill-traveller/cud/').as('ST_Creation')
      cy.contains('SAVE AND NEXT').click()
      cy.wait(5000)
      cy.wait('@ST_Creation').then((interception)=>{
        expect(interception.response.statusCode).to.equal(201)
        cy.log(interception.response.statusCode)
      })
      cy.contains('SAVE AND NEXT', {timeout:10000}).click()
      cy.wait(2000)
      cy.contains('SAVE AND NEXT', {timeout:10000}).click()
      cy.wait(2000)
      cy.contains('SAVE AND NEXT', {timeout:10000}).click()
      cy.wait(2000)
      cy.contains('CREATE').click()
      cy.wait(5000)
      cy.wait(5000)
    })
    it.skip('playground_creation', ()=> {
      cy.viewport(1500,1500)
      cy.visit("https://demoiiht.techademy.com/")
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-mo6xr9"][type="button"]',{timeout:10000}).click()
      cy.get('[name="username"]',{timeout:10000}).click().type("darshan.kumar@mailinator.com")
      cy.get('[name="password"]',{timeout:10000}).type("Tr0ngP@ssw0rd!")
      cy.get('#root > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-6.css-eph4u6 > div > div > div > form > div > div.MuiStack-root.css-q7yo2q > div:nth-child(2) > button',{timeout:10000}).click()
      cy.get('[class="MuiStack-root css-6nwsio"][id="basic-button"]',{timeout:10000}).eq(1).trigger('mouseover');
      cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm',{timeout:10000}).contains('Courses & Paths').click()
      cy.get('div[class="MuiTabs-flexContainer css-k008qs"][role="tablist"]',{timeout:10000}).contains('Playground').click()
      cy.contains('CREATE').click()
      function generateRandomWord(wordArray) {
        return wordArray[Math.floor(Math.random() * wordArray.length)];
      }
      function generatePLName() {
        const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
        const nouns = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const suf = "Automation PL"
        
        const randomAdjective = generateRandomWord(adjectives);
        const randomNoun = generateRandomWord(nouns);
        
        return `${randomAdjective} ${randomNoun} ${suf}`;
      }
      cy.log(generatePLName())
      cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(generatePLName())
      cy.get('div[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-1dz0ebp"]').eq(0).type("auto")
      cy.get(':nth-child(4) > .MuiFormControl-marginDense > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').each(($el, index, $list) => {
         if($el.text()==="Automation_test"){
          $el.click()
         }
      })
      cy.wait(5000)
     
    })                                     //git add testing karala
    















