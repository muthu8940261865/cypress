const { select, timeout } = require("async");
const { delay } = require("bluebird");
// cy.get('blablabal').Scrollintoview -> used to scroll and find the element
//cy.get('input[id="sponsor_logo"][type="file"]').attachFile('7111.jpg') -> File attachment
import 'cypress-file-upload';

describe("API Testing", () => {
  
  before(() => { 
    // Get the token before running the tests
    cy.getToken();
  });
 it('LP Creation', () =>{
   cy.viewport(1500,1500)
      const requestBody = {
        catalogue: [],
        category: 46,
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
        name: "API TestAutomation auto 665",
        prerequisite: null,
        proficiency: null,
        rating: null,
        role: [],
        skill: [],
        start_date: null,
      };
      cy.get('@authToken').then((token) => {
        cy.request({
          method: 'POST',
          url: 'api/v1/learning-path/cud/', 
          body: requestBody,
          headers: {        
            'Content-Type': 'application/json',
            'Idp-Token': `${token}`,
          }
      }).then((response) => {
          expect(response.status).to.eq(201);
          cy.log(response.status)
      })
    })
  })
  /*it('ALP_Creation',()=>{
    cy.viewport(1500,1500)
    const request_body={
      category: "Software Development",
      learning_points: 77,
      learning_type:"basic",
      name: "API test ALP",
      proficiency: "basic"    
    }
    
    cy.get('@authToken').then((token) => {
      cy.request({
        method: 'POST',
        url: 'api/v1/advanced-learning-path/cud/', 
        body: request_body,
        headers: {        
          'Content-Type': 'application/json',
          'Idp-Token': `${token}`,
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        cy.log(response.status)
    })

  })
  })*/
})