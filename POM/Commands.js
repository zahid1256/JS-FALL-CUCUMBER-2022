class Commands {




    /**
     * 
        setValue
        getText
        cilck
        $
        getAttribute
        isDisplayed
        isEnabled
        isSelected
        selectByVisibleText
        selectByAttribute
        selectByIndex
    
     */
    
        /**
         * Generic function to find webElement
         * input: string(locator)
         */
        async findWebElement(locator) {
            return await $(locator);
        }
    
        /**
         * Generic function to find webElements
         * input: string(locator)
         */
        async findAllWebElement(locator) {
            return await $$(locator);
        }
    
        /**
         * Generic function to enter data in a WebElement
         * name: typeInWebElement
         * input: string(dataToEnter), string(locator)
         */
        async typeInWebElement(locator, dataToEnter) {
            /*
                1. find the webElement
                2. if found, type in it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            await $(locator).setValue(dataToEnter);
        }
    
        /**
         * Generic function to click a WebElement
         * name: clickWebElement
         * input: string(locator)
         */
        async clickWebElement(locator) {
            /*
                1. find the webElement
                2. if found, click it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            await $(locator).click();
        }
    
        /**
         * Generic function to find if field is enabled
         * name: isWebElementEnabled
         * input: string(locator)
         */
        async isWebElementEnabled(locator) {
            /*
                1. find the webElement
                2. if found, check if element is enabled
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).isEnabled();
        }
    
        /**
         * Generic function to get Text of a WebElement
         * name: getTextOfWebElement
         * input: string(locator)
         */
        async getTextOfWebElement(locator) {
            /*
                1. find the webElement
                2. if found, return Text
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).getText();
        }
    
        /**
         * Generic function to get Attribute value of a WebElement
         * name: getAttributeWebElement
         * input: string(locator), string(attrName)
         */
        async getAttributeWebElement(locator, attrName) {
            /*
                1. find the webElement
                2. if found, return attribute value
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).getAttribute(attrName);
        }
    
        /**
         * Generic function to select data in dropdown (using Visible text)
         * name: selectDataInDropdown
         * input: locatorDropdown, valueWantToSelect
         */
        async selectDataInDropdown(locator, dataToSelect) {
            const dropdown = await $(locator);
            dropdown.selectByVisibleText(dataToSelect);
        }
    
        /**
         * Generic function to move mouse on any web-Element
         * name: moveMouseOn
         * input: locator
         */
        async moveMouseOn(locator) {
            await $(locator).moveTo();
        }
    
        /**
         * Generic function to get window handle
         * name: getHandle
         * 
         */  
        async getHandle() {
            return await browser.getWindowHandle();
        }
    
        /**
         * Generic function to get ALL window handle
         * name: getHandles
         * 
         */  
        async getHandles() {
            return await browser.getWindowHandles();
        }
    
        /**
         * Generic function to switch to a new handle
         * name: switchToWindowHandle
         * input: newHandle
         * 
         */  
        async switchToWindowHandle(newHandle) {
            return await browser.switchToWindow(newHandle);
        }
    
    
        /**
         * Generic function to select value from auto-suggestion using getText
         * name: selectFromAutoSuggestion
         * input: locator (for all suggestions), userLikeToSelect
         */
        async selectFromAutoSuggestion(locator, userLikeToSelect) {
            const allSuggestions = await $$(locator);
            for (const suggestion of allSuggestions) {
                const webText = await suggestion.getText();
                if (webText.toLowerCase().localeCompare(userLikeToSelect.toLowerCase()) === 0) {
                    await suggestion.click();
                    break;
                }
            }
        }
    
        /**
         * Generic function to select date from calendar using getAttribute
         * name: selectDateInCalendar
         * input: locator (for all dates), dateUserLikesToSelect
         */
        async selectDateInCalendar(locator, dateUserLikesToSelect) {
            const allDates = await $$(locator);     // [we1, we2, we3, we4, ...]
            
            for (const dateElement of allDates) {
                const dataDayValue = await dateElement.getAttribute('data-day');
                if (dataDayValue.localeCompare(dateUserLikesToSelect) === 0) {
                    await dateElement.click();
                    break;
                }
            }
        }
    
    }
    module.exports = Commands;