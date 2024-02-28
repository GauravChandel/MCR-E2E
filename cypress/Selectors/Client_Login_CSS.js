export class LoginClient {


Login_Locator = {

Client_Email : '#client_email',
Client_Password: '#client_password',
LoginSubmit_button : '[value="Log in"]'
}


OpenTheURL(){
    cy.visit('')    // we are getting the value here from config.js file of baseURL
}

Email_n_Password ( email, password) {
    cy.get(this.Login_Locator.Client_Email).type(email)
    cy.get(this.Login_Locator.Client_Password).type(password)
    cy.get(this.Login_Locator.LoginSubmit_button).click()

}



}