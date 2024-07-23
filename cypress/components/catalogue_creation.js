function generateRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
  }
  function generateCatalogueName() {
    const adjectives = ['Advanced', 'Innovative', 'Creative', 'Dynamic', 'Unique', 'NextGen', 'Premium', 'Elegant'];
    const nouns = ['Catalogue', 'Collection', 'Series', 'Lineup', 'Selection', 'Range', 'Assortment', 'Array'];
    const suf = "Automation test"
    
    const randomAdjective = generateRandomWord(adjectives);
    const randomNoun = generateRandomWord(nouns);
    
    return `${randomAdjective} ${randomNoun} ${suf}`;
    cy.log(generateCatalogueName())
  }
  
class catalogue_creation{
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
    click_on_course_and_path(){
        cy.contains("Catalogues").click({force: true});
        
    }  
    click_on_create_button(){
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"]').click();
        
    }
    user_name_field(name){
        cy.get('input[name="name"][class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type(name);
    }
    assessment_enable(){
        cy.get('input[name="is_assessment_enabled"][type="checkbox"]', {timeout:10000}).check();
    }
    is_labs_enabled(){
        cy.get('input[name="is_labs_enabled"][type="checkbox"]', {timeout:10000}).check();
    }
    is_self_enroll_enabled(){
        cy.get('input[name="is_self_enroll_enabled"][type="checkbox"]', {timeout:10000}).check();
    }
    _save_and_next(){
        cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
        cy.wait(2000)
    }
    content_selection(){
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1wpq8rx"][type="button"]').eq(1).click();
        cy.wait(3000)
        
    }
    __save_and_next(){
        cy.contains('SAVE AND NEXT', {timeout:10000} ).click()
        cy.wait(2000)
    }
    validation_with_creation_API(){
        cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/catalogue/cud/').as('catalogue_creatoin');
    cy.wait(4000);
    cy.contains('SAVE AND NEXT', {timeout:10000} ).click();
    cy.wait('@catalogue_creatoin').then((interception) => {
      // Validate that the response status is 201
      cy.wait(10000);
      expect(interception.response.statusCode).to.equal(201);
      cy.log(interception.response.statusCode);
    })
    
    }
    click_on_create_button(){
        cy.contains("CREATE").click();     
        cy.wait(5000);
        cy.log("successfully catalogue created")
    }
    catalogue_creation_method(email,password){
        const name=generateCatalogueName();
        cy.log(name);
        this.visit();
        this.Ass_cukkies();
        this.usernamen_field(email);
        this.password_filed(password);
        this.login_button();
        this.click_on_course_and_path();
        this.click_on_create_button();
        this.user_name_field(name);
        this.assessment_enable();
        this.is_labs_enabled();
        this.is_self_enroll_enabled();
        this._save_and_next();
        this.content_selection();
        this.__save_and_next();
        this.validation_with_creation_API();
        this.click_on_create_button();
    }

}


export default catalogue_creation