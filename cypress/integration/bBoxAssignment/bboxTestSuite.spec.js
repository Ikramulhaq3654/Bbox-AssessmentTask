import bBoxUserScreen from '../../support/pageObject/bBoxAddUser'

describe("bbox TestSuite - Add New User", () =>{

     beforeEach(()=>{
        cy.fixture('testData').then(function (testData){    
        cy.visit(testData.url)
        //cy.visit("http://localhost:4200/")
        })
     })

it("TestCase 1 - Add New User->Entering All Fields", () =>{

    cy.fixture('testData').then(function (testData){  
        bBoxUserScreen.addUserWithAllFields(testData.name, testData.username, testData.email, testData.Address , testData.PhoneNo , testData.Website , testData.Company)       
        /*To assert that created user displayed on the GRID on screen*/ 
        cy.wait(4000) //to avoid screenload flaky.
        bBoxUserScreen.pageTitle.should('contain', 'Users');
        bBoxUserScreen.searchField.click().clear().type('Test');
        cy.wait(5000) //to avoid screenload flaky. 
        bBoxUserScreen.gridRow.contains('Test-Name').should('exist').and('be.visible')
    })
})

it("TestCase 2 - Add New User->Entering only mandatory/Required Fields", () =>{

    cy.fixture('testData').then(function (testData){  
        bBoxUserScreen.addUserWithMandatoryFieldsOnly(testData.nameTwo , testData.usernameTwo, testData.emailTwo)
        cy.wait(3000) //to avoid screenload flaky.
        bBoxUserScreen.pageTitle.should('contain', 'Users');
        bBoxUserScreen.searchField.click().clear().type('Test');
        cy.wait(3000) //to avoid screenload flaky. 
        bBoxUserScreen.gridRow.contains('Test-Name').should('exist').and('be.visible')
    })
})


it("TestCase 3 - Delete a user from the GRID", () =>{

    cy.fixture('testData').then(function (testData){
        cy.get('tbody td').contains(testData.Name).siblings('td').find('[data-icon="trash-alt"]').click()
        bBoxUserScreen.gridRow.contains('Ervin Howell').should('not.exist')
        
    })
})

})

