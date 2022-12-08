const { Given, When } = require("@wdio/cucumber-framework");
const LoginPage = require('../../POM/Facebook/LoginPage')
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const { expect } = require("chai");

const loginPage = new LoginPage()
const loginErrorPage = new LoginErrorPage()


Given(/^I am on (facebook|hotels|darksky|yahoo|amazon)$/, async function (urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net');
            break;
        case 'yahoo':
            await browser.url('https://www.yahoo.com');
            break;
        case 'amazon':
            await browser.url('https://www.amazon.com');
            break;
        default:
            break;
    }
});

// When(/^I type '(.*)' as username$/, async function (username) {
//     await loginPage.enterLoginEmail(username)
// } )

// When(/^I type '(.*)' as password$/, async function (pwd) {
//     await loginPage.enterLoginPassword(pwd)
// } )

When(/^I type '(.+)' as (username|password)$/, async function (data, field) {
    switch (field.toLowerCase()) {
        case 'username':
            await loginPage.enterLoginEmail(data);
            break;
        case 'password':
            await loginPage.enterLoginPassword(data);
            break;    
        default:
            break;
    }
})

When(/^I click login button$/, async function(){
    await loginPage.clickLoginInButton()
})

When(/^I verify error is displayed$/, async function(){
    expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error is not displayed').to.be.true;
})

When(/^I verify login (.*) is enabled$/, async function (field) {
    let isFieldEnabled = false;
    switch (field.toLowerCase()) {
        case 'email':
            isFieldEnabled = await loginPage.isLoginEmailEnabled();
            break;
        case 'password':
            isFieldEnabled = await loginPage.isLoginPasswordEnabled();
            break;
        case 'button':
            isFieldEnabled = await loginPage.isLoginButtonEnabled();
            break;        
        default:
            break;
    }
    expect(isFieldEnabled, `Login ${field} is NOT enabled`).to.be.true;
    
})
    
