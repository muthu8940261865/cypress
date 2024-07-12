class reportgeneratoin{
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
      click_on_report(){
        cy.contains('Reports').click({force: true})
      }
      click_on_master_report_tab(){
        cy.contains('Master Report').click({force: true})
      }
      field_geneation_name(){
        const length = 10
        function generateRandomString(length) {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let result = '';
          for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return result;
        }
        generateRandomString(length)
        cy.log(generateRandomString(length))
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"][name="name"]').type(generateRandomString(length))
        cy.wait(5000)
      }
      date_skip_toggle(){
        cy.get('input[class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"][name="is_date_skipped"]').click()
      }
      genetate_report_button(){
        cy.contains('Generate Report', { timeout:10000 }).click()
      }
      refresh_button(){
        cy.contains('refresh', { timeout:10000 }).click()
        cy.wait(100000)
        cy.contains('refresh').click()
      }
      complete_text_assert_validation(){
        cy.get('#enhanced-table-checkbox-0 > p > span').eq(4).should("have.text", " completed")
      }

repgenmethod(email,password){
    this.visit();
    this.Ass_cukkies();
    this.usernamen_field(email);
    this.password_filed(password);
    this.login_button();
    this.click_on_report();
    this.click_on_master_report_tab();
    this.field_geneation_name();
    this.date_skip_toggle();
    this.genetate_report_button();
    this.refresh_button();
    this.complete_text_assert_validation();
}
}
export default reportgeneratoin