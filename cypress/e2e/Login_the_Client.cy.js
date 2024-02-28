/// <reference types = "cypress" />

import { LoginClient } from "../Selectors/Client_Login_CSS"
const Login = new LoginClient()


import cred from "../fixtures/clientcred.json"

describe('Login the client' , ()=>{
    before(()=>{
        Login.OpenTheURL()
    })

    it('Login the client', ()=>{
        Login.Email_n_Password(cred.Client.Email, cred.Client.Password)
    })



})