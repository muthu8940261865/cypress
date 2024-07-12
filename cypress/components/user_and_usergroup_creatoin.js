import { string } from "assert-plus";

function name_generator(){
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
  
  return [username, dummyEmail, surname];
}
class user_and_usergroup_creatoin{
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
    click_on_user(){
        cy.contains('Users').click({force: true});
    }
    user_create_button(){
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"]').click()
    }

    first_name(username){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="first_name"]').type(username)
    }
    surname_field(surname){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="last_name"]').type(surname)
    }
    emailid_field(dummyEmail){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="email"]').type(dummyEmail)
    }
    onsite_user_dropdown(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"][id="combo-box-demo"]').click().type("{downarrow}{enter}")
    }
    role_dropdown(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-1x5jdmq"][id="combo-box-demo"]').click().type("{downarrow}{downarrow}{enter}");
    }
    userid_field(username){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="user_id_number"]').type(username);
    }
    create_button(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div.MuiStack-root.css-1tw8rvx > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-fullWidth.css-seuxbh').click()
    }
    check_assert_with_created_user(dummyEmail){
        cy.get('[class="MuiDataGrid-cellContent"][role="presentation"]').eq(1).should("have.text", dummyEmail)
    }
    usergroup_tab(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-5u1gyh > div > div').contains('User Groups').click()
    }
    usergroup_create_button(){
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-y3og1h"][type="button"]').click()
    }
    manager_username_field(usernamee){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(usernamee)
    }
    user_group_id_field(usernamee){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="group_id"]').type(usernamee) 
    }
    manager_dropdown(){
        cy.get('input[id="tags-filled"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1uvydh2"]').click().type("{downarrow}{enter}")
    }
    api_using_create(){
        cy.intercept('POST', 'https://core-prod-api.techademy.com/api/v1/access/control/user/group/cud/').as('usergroup_creation')
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth css-seuxbh"][type="submit"]').click()
        cy.wait('@usergroup_creation').then((interception) => {
            // Validate that the response status is 201
            expect(interception.response.statusCode).to.equal(201);
            cy.log(interception.response.statusCode)
            cy.wait(5000)
    })
    }

    
    create_method(email,password){
      const [username,dummyEmail, surname]  = name_generator();
      this.visit();
      this.Ass_cukkies();
      this.usernamen_field(email);
      this.password_filed(password);
      this.login_button();
      this.click_on_user();
      this.user_create_button();
      this.first_name(username);
      this.surname_field(surname);
      this.emailid_field(dummyEmail);
      this.onsite_user_dropdown();
      this.role_dropdown();
      this.userid_field(username);
      this.create_button();
      this.check_assert_with_created_user();
      this.usergroup_tab();
      this.usergroup_create_button();
      const [usernamee,dummyEmail3, surname4]  = name_generator();
      this.manager_username_field(usernamee);
      this.user_group_id_field(usernamee);
      this.manager_dropdown();
      this.api_using_create();
    }
}
export default user_and_usergroup_creatoin;