import { registrationPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registrationPage()

describe('Test Automation for Registration',()=>{



    it('Test Registration Flow ', ()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckBox()
        registerObj.clickOnContinue()
        cy.contains('Your Account Has Been Created!').should('exist')
        cy.log('Congratulations! Your new account has been successfully created!')
         
    })
})