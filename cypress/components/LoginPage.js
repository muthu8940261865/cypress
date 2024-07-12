class LoginPage {
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
    mouse_hover_to_manage(){
        cy.get('#basic-button', { timeout: 10000 }).trigger('mouseover');
    }
    enrollment_module_icon(){
        cy.get('#basic-button > div.MuiStack-root.css-1d2q9lm').contains('Enrollments').click();
    }
    assign_learning_button(){
        cy.contains('ASSIGN LEARNING').click();
    }
    select_learningtype_field_and_select_coruse(){
        cy.get('#combo-box-demo').click(); 
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div.MuiStack-root.css-1i43dhb > div > div > div:nth-child(1) > div > div').contains('Course').click();
        cy.wait(1000);
    }
    select_course(){
        cy.get('input[placeholder="Search Course"][type="text"]').click().type('{downarrow}{enter}');
        cy.wait(1000);
    }
    calender_field(){
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1uvydh2"][placeholder="MM/DD/YYYY hh:mm aa"]').click();
        cy.wait(1000);
    }
    calender_icon(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.css-1h77wgb > div > div > div > div > div > div > div > button').click();
        cy.wait(1000);
    }
    year_dropdown(){
        cy.get('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-a9rw36 > div > div.MuiPickersLayout-contentWrapper.css-lz05jy > div > div.MuiDateCalendar-root.css-1080di7 > div.MuiPickersCalendarHeader-root.css-1dozdou > div.MuiPickersCalendarHeader-labelContainer.css-1oub5on > button').click();
        cy.wait(1000);
    }
    plus_two_year_selection(){
        cy.get('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-a9rw36 > div > div.MuiPickersLayout-contentWrapper.css-lz05jy > div > div.MuiDateCalendar-root.css-1080di7 > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div:nth-child(127) > button').click();
        cy.wait(1000);
    }
    ok_button(){
        cy.get('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-a9rw36 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.MuiPickersLayout-actionBar.css-14b29qc > button').click();
        cy.wait(1000);
    }
    save_and_next(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-1ei7itv > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.css-xlmuuu').click();
        cy.wait(1000);
    }
    first_row_in_the_list(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-3reppk > div > div.MuiBox-root.css-178yklu > div > div > div.MuiDataGrid-main.css-opb0c2 > div.MuiDataGrid-virtualScroller.css-frlfct > div > div > div:nth-child(1) > div.MuiDataGrid-cellCheckbox.MuiDataGrid-cell--withRenderer.MuiDataGrid-cell.MuiDataGrid-cell--textCenter.MuiDataGrid-withBorderColor > span > input').check();
        cy.wait(1000);
    }
    assign_button(){
        cy.get('#root > div.MuiStack-root.css-83v8al > div.MuiStack-root.css-1fxhkkd > div > div.MuiContainer-root.MuiContainer-maxWidthXl.MuiContainer-disableGutters.css-nmbyqj > div > div > div > div > form > div.MuiStack-root.css-1ei7itv > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.css-xlmuuu').click();
        cy.wait(1000)
    }
    assert_condition(){
        cy.get('#root > div.Toastify', { timeout: 20000 }).should("have.text", "Assigned Successfully");
        cy.log("Course enrollment successful");
    }
  
    login(email, password) {
      this.visit();
      this.Ass_cukkies();
      this.usernamen_field(email);
      this.password_filed(password);
      this.login_button();
      this.mouse_hover_to_manage();
      this.enrollment_module_icon();
      this.assign_learning_button();
      this.select_learningtype_field_and_select_coruse();
      this.select_course();
      this.calender_field();
      this.calender_icon();
      this.year_dropdown();
      this.plus_two_year_selection();
      this.ok_button();
      this.save_and_next();
      this.first_row_in_the_list();
      this.assign_button();
      this.assert_condition();
    }
  }
  
  export default LoginPage;
  