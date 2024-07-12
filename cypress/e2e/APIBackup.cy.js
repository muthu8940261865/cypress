let authToken; // Declare a variable to store the authentication token

describe("API Testing", () => {

  before(() => {
    // Retrieve the authentication token and store it
    cy.request({
      method: 'GET',
      url: 'https://idp-prod-iris.azurewebsites.net/api/TokenAuth/Authenticate', // Example URL to retrieve token
    }).then((response) => {
      authToken = response.body.token; // Assuming the token is in the response body
      cy.log(authToken)
    });
  });

  /*it('Test Case 1', () => {
    // Use authToken in your request
    
    cy.request({
      method: 'POST',
      url: '/api/endpoint',
      headers: {
        'Content-Type': 'application/json',
        'Idp-Token': `Bearer ${authToken}`, // Use the stored token here
      },
      body: {
        // Your request body
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
      }
    }).then((response) => {
      // Assertions or further actions
    });
  });

  it('Test Case 2', () => {
    // Use authToken in another request
    cy.request({
      method: 'POST',
      url: '/api/anotherEndpoint',
      headers: {
        'Content-Type': 'application/json',
        'Idp-Token': `Bearer ${authToken}`, // Use the stored token here
      },
      body: {
        // Your request body
      }
    }).then((response) => {
      // Assertions or further actions
    });
  });*/

});
