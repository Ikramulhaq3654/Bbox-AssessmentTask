class BboxAddUser {
    
    get userPlus() {
      return  cy.get('[data-icon="user-plus"]')
    }

    get addName() {
      return cy.get('[ng-reflect-name="name"]')
    }

    get addUsername() {
      return  cy.get('[ng-reflect-name="username"]') 
    }

    get addEmail() {
      return cy.get('[ng-reflect-name="email"]')
    }

    get addAddress() {
      return cy.get('[ng-reflect-name="address"]')
    }

    get addPhone() {
      return cy.get('[ng-reflect-name="phone"]')
    }

    get addWebsite() {
      return cy.get('[ng-reflect-name="website"]')  
    }

    get addComapny() {
      return cy.get('[ng-reflect-name="company"]')
    }

    get clickSubmit() {
      return cy.get('[type="submit"]')
    }

    get pageTitle() {
      return cy.get('h1')
    }

    get searchField(){
      return cy.get('[placeholder="Search users by id or name or username"]')
    }

    get gridRow(){
      return cy.get('tbody td')

    }

    get clickDelete(){
      return cy.get('[data-icon="trash-alt"]')
    }

   addUserWithAllFields(name,username,email,address,phone,website,company) {
      this.userPlus.should('exist').click()
      this.addName.click().clear().type(name).should('have.value', name);
      this.addUsername.click().clear().type(username).should('have.value', username);
      this.addEmail.click().clear().type(email).should('have.value', email);
      this.addAddress.click().clear().type(address).should('have.value', address);
      this.addPhone.click().clear().type(phone).should('have.value', phone);
      this.addWebsite.click().clear().type(website).should('have.value', website);
      this.addComapny.click().click().type(company).should('have.value', company);
      this.clickSubmit.click()
    }

    addUserWithMandatoryFieldsOnly(nameTwo, usernameTwo,emailTwo){
      this.userPlus.should('exist').click()
      this.addName.click().clear().type(nameTwo).should('have.value', nameTwo)
      this.addUsername.click().clear().type(usernameTwo).should('have.value', usernameTwo)
      this.addEmail.click().clear().type(emailTwo).should('have.value', emailTwo)
      this.clickSubmit.click()
    }

  
  }
  
  export default new BboxAddUser()