const { createYield } = require("typescript")

describe("bbox TestSuite - Add New User", () =>{
     beforeEach(()=>{
         cy.visit("http://localhost:4200/")
     });
it("TestCase 1 - Add New User->Entering All Fields", () =>{
    
    //cy.get('ng-fa-icon').click();
    cy.get('svg-inline--fa fa-user-plus fa-w-20').click();
    cy.get('[ng-reflect-name="name"]').type('Test-Name').should('have.value', 'Test-Name');
    //.should('have.attr', 'placeholder', 'Email')
    cy.get('[ng-reflect-name="username"]').type('Test-Username').should('have.value', 'Test-Username');
    cy.get('[ng-reflect-name="email"]').type('Test@Test.com').should('have.value', 'Test@Test.com');
    cy.get('[ng-reflect-name="address"]').type('House#123,Lahore,Pakistan').should('have.value', 'House#123,Lahore,Pakistan');
    cy.get('[ng-reflect-name="phone"]').type('+92-12345678').should('have.value', '+92-12345678');
    cy.get('[ng-reflect-name="website"]').type('www.bbox.com').should('have.value', 'www.bbox.com');
    cy.get('[ng-reflect-name="company"]').type('Bbox').should('have.value', 'Bbox');
    cy.get('.modal-footer').click(); //click on Submit Button

    /*To assert that created user displayed on the GRID on screen*/ 

    cy.title().should('include', 'Users');
    //cy.get('.table').should(have.)
    cy.get('.table td').last().should('contain', 'Test-Name');
OR 
    cy.get('.table')
    .find('tbody tr:last')
    .contains('td', 'Test-Name')
    //.should('be.visible')
    .should('be.exist')

})

it("TestCase 2 - Add New User->Entering only mandatory/Required Fields", () =>{

    cy.get('svg-inline--fa fa-user-plus fa-w-20').click();
    cy.get('[ng-reflect-name="name"]').type('Test-Name').should('have.value', 'Test-Name');
    cy.get('[ng-reflect-name="username"]').type('Test-Username').should('have.value', 'Test-Username');
    cy.get('[ng-reflect-name="email"]').type('Test@Test.com').should('have.value', 'Test@Test.com');
    cy.get('.modal-footer').click(); //click on Submit Button
})

//To write test-script to Submit form when mandatory fields are not provided [hint: class="ng-touched ng-dirty ng-invalid" & submit button = disabled] -- how to assert on it ?



it("TestCase 3 - Search a user from the GRID", () =>{

    cy.get('.form-control').type('Leanne Graham');
    //cy.get('.form-control').type('Test-Name');
    cy.get('svg-inline--fa fa-search fa-w-16').click();

    cy.get('.table')
    //.find('tbody tr:last')
    .contains('td', 'Test-Name')
    //.should('be.visible')
    .should('be.exist')
})


it("TestCase 4 - Delete a user from the GRID", () =>{

    cy.get('.text-danger').click()
    //now want to make sure that the record we have deleted no more exists on the GRID - How ?
    .should('not.exist')
})






})