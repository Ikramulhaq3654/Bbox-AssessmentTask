import bBoxUserScreen from '../../support/pageObject/bBoxAddUser'

describe("bbox TestSuite - Add New User", () =>{

     beforeEach(()=>{
        cy.fixture('testData').then(function (testData){    
            cy.visit(testData.url)
        })
    })

    it("TestCase 1 - Add New User->Entering All Fields", () =>{

        cy.fixture('testData').then(function (testData){  
            bBoxUserScreen.addUserWithAllFields(testData.nameOne, testData.usernameOne, testData.emailOne, testData.address, testData.phoneNo, testData.website, testData.company)       
            bBoxUserScreen.threeSecondWait //to avoid screenload flaky.
            bBoxUserScreen.pageTitle.should('contain', 'Users')
            bBoxUserScreen.searchField.click().clear().type('Test')
            bBoxUserScreen.threeSecondWait //to avoid screenload flaky. 
            bBoxUserScreen.gridRow.contains('Test-Name').should('exist').and('be.visible')
        })
    })
    
    it("TestCase 2 - Add New User->Entering only mandatory/Required Fields", () =>{

        cy.fixture('testData').then(function (testData){  
            bBoxUserScreen.addUserWithMandatoryFieldsOnly(testData.nameTwo, testData.usernameTwo, testData.emailTwo)
            bBoxUserScreen.threeSecondWait  //to avoid screenload flaky.
            bBoxUserScreen.pageTitle.should('contain', 'Users')
            bBoxUserScreen.searchField.click().clear().type('Test')
            bBoxUserScreen.threeSecondWait  //to avoid screenload flaky. 
            bBoxUserScreen.gridRow.contains('Test-Name').should('exist').and('be.visible')
        })
    })

    it("TestCase 3 - Delete a user from the GRID", () =>{

        cy.fixture('testData').then(function (testData){
            bBoxUserScreen.addUserWithMandatoryFieldsOnly(testData.nameTwo, testData.usernameTwo, testData.emailTwo)
            bBoxUserScreen.threeSecondWait  //to avoid screenload flaky.
            bBoxUserScreen.searchField.click().clear().type('Test');
            bBoxUserScreen.threeSecondWait //to avoid screenload flaky.
            bBoxUserScreen.clickTrashIcon(testData.nameTwo)
            bBoxUserScreen.gridRow.contains(testData.nameTwo).should('not.exist')
        })
    })
})
