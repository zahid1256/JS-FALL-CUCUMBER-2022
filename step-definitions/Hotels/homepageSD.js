const { Given } = require("@wdio/cucumber-framework")
const HomePage = require ("../../POM/Hotels/HomePage")
const {expect} = require("chai")

const homePage = new HomePage();


Given(/^I am on hotels$/, async function (urlName) {
    await browser('https://www.hotels.com')
});

When(/^I change language to <languageOption>$/, async function () {
    await homePage.clickOnLanguageSelector()
    await homePage.clickOnLanguageDropDown()
    await homePage.clickOnSpanish();
    await homePage.clickOnSave()
})

Then(/^I verify language got changed to <language>$/, async function(){
    expect(await homePage.isLanguageAsSpanishEnabled(), 'Spanish is not enabled').to.be.true
})



