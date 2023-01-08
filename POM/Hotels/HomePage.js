const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';
    languageLocator = '//button[@data-stid]//div[contains(@class, "uitk-text-default-theme")]'
    languageDropDownLocator = '#language-selector'
    spanishLocator = '//option[text()="Español (Estados Unidos)"]'
    englishLocator = '//option[text()="English (United States)"]'
    saveButtonLocator = '//button[text()="Save" or text()="Guardar"]'
    datesLocator = '//button[@id="date_form_field-btn"]'
    getTheAppLocator = '//button[text()="Get the app"]'
    phoneNumberLocator = '//input[@name="phoneNumber"]'
    phoneNumberErrorMsgLocator = '//div[text()="Please enter a valid phone number."]'

    //Travelers
    travelersField = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    adultsIncrementButton = '//*[@aria-label="Increase the number of adults in room 1"]'
    childIncrementButton = '//*[@aria-label="Increase the number of children in room 1"]'
    decreaseAdultCountLocator= '//*[@aria-label="Decrease the number of adults in room 1"]'
    decreaseChildCountLocator= '//*[@aria-label="Decrease the number of children in room 1"]'









    // Calendar
    calendarOpenLocator = '#date_form_field-btn';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';
    pastDisabledDatesLocator = '//button[contains(@aria-label, "disabled")]'
    backMonthButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]'


    //Sign in Locators

    signInButtonLocator = '//button[text()="Sign in"]'
    feedbackLinkLocator = '//a[text()="Feedback"]'
    submitButtonLocator = '#submit-button'
    starBoxErrorLocator = '//div[@class="radio-group"]'
    errorMsgLocator ='//div[@id="validation_header"]//p[contains(text(), "Please fill in")]'
    starRatingLocator = '//label[@for="page-rating-4"]'
    commentLocator = '//textarea[@name="verbatim"]'
    likelyToReturnLocator= '//select[@id="will-you-return"]'
    feedbackConfirmationLocator= '//h5[@class="question-header"]'

    //


    // functions to interact with the web-Elements on the HomePage
    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    async clickOnLanguageSelector() {
        await this.commands.clickWebElement(this.languageLocator)
    }
    async clickOnLanguageDropDown() {
        await this.commands.clickWebElement(this.languageDropDownLocator)
    }
    async clickOnSpanish() {
        await this.commands.clickWebElement(this.spanishLocator)
    }
    async clickOnEnglish() {
        await this.commands.clickWebElement(this.englishLocator)
    }
    async clickOnSave() {
        await this.commands.clickWebElement(this.saveLocator)
    }
    async isLanguageAsSpanishEnabled() {
        return await this.commands.isWebElementEnabled(this.spanishLocator)
    }
    async isLanguageAsEnglishEnabled() {
        return await this.commands.isWebElementEnabled(this.englishLocator)
    }

    async clickOnDate() {
        await this.commands.clickWebElement(this.datesLocator)
    }


    async findDisabledDates() {
        return await this.commands.findAllWebElement(this.pastDisabledDatesLocator)
    }

    async clickSignInButton() {
        await this.commands.clickWebElement(this.signInButtonLocator)
    }

    async clickFeedbackLink() {
        await this.commands.clickWebElement(this.feedbackLinkLocator)
    }

    async switchToNextWindowHandle() {
        const hotelWindowHandle = await this.commands.getHandle()
        const allWindowHandles = await this.commands.getHandles()
        for (const handle of allWindowHandles) {
            if (handle !== hotelWindowHandle) {
                await this.commands.switchToWindowHandle(handle)
                break;
            }
        }

    }

    async clickSubmitButton() {
        await this.commands.clickWebElement(this.submitButtonLocator)
    }

    async scrollToGetTheApp() {
        await this.commands.scrollIntoView(this.getTheAppLocator);
        await browser.pause(2000)
    }

    async clickPhoneNumber() {
        await this.commands.clickWebElement(this.phoneNumberLocator)
    }

    async enterPhoneNumber (phone) {
        await this.commands.typeInWebElement(this.phoneNumberLocator,phone)
    }

    async clickGetTheApp() {
        await this.commands.clickWebElement(this.getTheAppLocator)
    }

    async getPhoneErrorText() {
        return await this.commands.getTextOfWebElement(this.phoneNumberErrorMsgLocator)
    }

    async clickOnTravelers() {
        await this.commands.clickWebElement(this.travelersField)
    }


    async changeLanguage(newLanguage) {
        await this.commands.clickWebElement(this.languageLocator)
        await this.commands.selectDataInDropdown(this.languageDropDownLocator, newLanguage)
        await this.commands.clickWebElement(this.saveButtonLocator)
    }

    async getLanguageFromWeb() {
        return await this.commands.getTextOfWebElement(this.languageLocator)
    }

    async getErrorText() {
        return await this.commands.getTextOfWebElement(this.errorMsgLocator)
    }

    async isStarErrorDisplayed() {
        await this.commands.isWebElementDisplayed(this.starBoxErrorLocator)
    }

    async getCurrentMonthAndYear() {
        await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator)
    }

    async clickStarRating() {
        await this.commands.clickWebElement(this.starRatingLocator)
    }

    async enterComment(comment) {
        await this.commands.clickWebElement(this.commentLocator)
        await this.commands.typeInWebElement(this.commentLocator,comment)
    }

    async selectLikelyToReturnDropdown(choice) {
        await this.commands.selectDataInDropdown(this.likelyToReturnLocator, choice)
    }

    async isFeedbackConfirmationDisplayed() {
        await this.commands.isWebElementDisplayed(this.feedbackConfirmationLocator)
    }

    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    
    }

}
module.exports = HomePage;