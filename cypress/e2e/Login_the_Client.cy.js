/// <reference types="cypress" />

import { LoginClient } from "../Selectors/Client_Login_CSS"
const Login = new LoginClient()    // Created the object of Loginclient class


import cred from "../fixtures/clientcred.json" // Import the JSON fixture directly


describe('Login the client', () => {
    beforeEach(() => {
        Login.OpenTheURL()
    })

    it('Login with valid credentials', () => {
        cy.viewport(1920, 1080)
        Login.Email_n_Password(cred[0].Client.Email, cred[0].Client.Password) // Access valid credentials from index 0
        cy.contains('Dashboard(This is only design for now)').should('be.visible').and('have.class', 'pb-2 border-b border-gray-200 h3')
    })

    it('Login with invalid credentials', () => {
        cy.viewport(1920, 1080)
        Login.Email_n_Password(cred[1].Invalid.Email, cred[1].Invalid.Password) // Access invalid credentials from index 1
    })
})
