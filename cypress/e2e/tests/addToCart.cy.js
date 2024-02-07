import { homePage } from "../../pages/homePage.js"
import testData from "../../fixtures/testData.json"

const homePageObj = new homePage()


describe('Add To Cart ',()=>{
    before(()=>{
        cy.login(testData.login.username,testData.login.password)
    })


    it('Verify the Add to Cart message',()=>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName)

    })
})