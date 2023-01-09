const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomePage = require('../../POM/Hotels/HomePage')
const Dates = require('../../Utils/Dates')

const homePage = new HomePage()
const dates = new Dates()

//TC-17-----------------------------------------------------------------------------

Given(/^I am on Hotels$/, async function () {
    await browser.url('https://www.hotels.com')
    await browser.pause('2000')
})

When(/^I click on Dates$/, async function () {
    await homePage.clickOnDate()
    await browser.pause('2000')
})

When(/^I verify current month is displayed$/, async function (){
    const currentMonthAndYear = await dates.getCurrentMonthAndYear()
    await homePage.goToMonth(currentMonthAndYear)
    
})

Then(/^I verify past dates are disabled$/, async function () {
    const disableDates = await homePage.findDisabledDates()
    const currentDate = dates.getCurrentDate()
})

Then (/^I verify back button on current month is disabled$/, async function() {
    
})

//TC-24-----------------------------------------------------------------------------

When(/^I click on Sign In$/, async function () {
    await homePage.clickSignInButton()
})

When(/^I click Feedback$/, async function () {
    await homePage.clickFeedbackLink()
})

When(/^I click Submit$/, async function () {
    await homePage.switchToNextWindowHandle()
    await browser.pause(5000)
    await homePage.clickSubmitButton()
})

When(/^I verify error message is displayed$/, async function(){
    const textOfError = await homePage.getErrorText()
    expect(textOfError, 'error msg is not displayed').to.be.equal('Please fill in the required information highlighted below.')
})

Then(/^I Verify star boxes section is in a red dotted box.$/, async function() {
    await homePage.isStarErrorDisplayed()
})


//TC-30-----------------------------------------------------------------------------


When(/^I scroll to get the app button$/, async function () {
    await homePage.scrollToGetTheApp()
    await browser.pause(5000)
    await homePage.clickPhoneNumber()
})

When(/^I enter '(.+)' in Phone number$/, async function (phone) {
    
    await homePage.enterPhoneNumber(phone)
    await browser.pause(5000)
})


When(/^I click on “Get the app“ button$/, async function () {
    await homePage.clickGetTheApp()
})

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function() {
    const errorTxt = await homePage.getPhoneErrorText()
    console.log(`ErrorMessage---> ${errorTxt}`);
    expect(errorTxt, 'error msg is not displayed').to.be.equal('Please enter a valid phone number.')
})

//TC-18-----------------------------------------------------------------------------

When(/^I click on Travelers$/, async function () {
    await homePage.clickOnTravelers()
})

When(/^I select "Adults" as 6$/, async function () {


})



// TC-31-----------------------------------------------------------------------------

When(/^I change language to (.+)$/, async function (newLanguageOption) {
    await homePage.changeLanguage(newLanguageOption)
})

Then(/^I verify language got changed to (.+)$/, async function (expLanguage) {
    const languageOnWeb = await homePage.getLanguageFromWeb() 
    expect(languageOnWeb, 'Language is not updated as expected').to.equal(expLanguage)
})



// TC-25-----------------------------------------------------------------------------

When(/^I select any star-rating$/, async function() {
    await homePage.clickStarRating()
})

When(/^I Enter '(.+)' in comments$/, async function(comment) {
    await homePage.enterComment(comment)
    await browser.pause(5000)
})

When(/^I select '(.+)' option for “How likely are you to return to Hotels.com?”$/, async function(choice) {
    await homePage.selectLikelyToReturnDropdown(choice)
})

When(/^I select '(.+)' answer for “Prior to this visit, have you ever booked on Hotels.com?”$/, async function() {
    await homePage.s
})

When(/^I select '(.+)' answer for ”Did you accomplish what you wanted to do on this page?”$/, async function() {
    await homePage.
})

When(/^I click Submit button$/, async function() {
    await homePage.clickSubmitButton()
})

When(/^Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function() {
    const feedbackConf = await homePage.isFeedbackConfirmationDisplayed()
    expect(feedbackConf, "Not displayed").to.be.true
})