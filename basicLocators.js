/** Locators: way to reach/find webElement
 * 
 * 1. Using id-attribute
 *      id-attribute is always going to be unique in the DOM
 *      To check if id-value is unique, In chropath -> //*[@id='idValue']
 * 
 *      const webElement = await $('#idValue');
 * 
 *      eg:
 *      const loginEmailInputBox = await $('#email');
 * 
 * 2. Using other attribute's value instead id-attribute
 *      To check if any attribute has unique value or not, In chropath -> //tagName[@attrName='attrValue']
 *      NOTE: Attribute's value CANNOT have spaces
 * 
 *      const webElement = await $('tagName[attrName=attrValue]')
 * 
 *      eg:
 *      const loginButton = await $('button[name=login]');
 * 
 * 3. Using linkText (can be used only for links)
 *      To check if linkText is unique or not, In chropath -> //a[text()='Link Text']
 * 
 *      const webElement = await $('=Link Text')
 * 
 *      eg:
 *      const linkButton = await $('=Create New Account');
 * 
 * 4. Using partial linkText (can be used only for links)
 *      To check if partial linkText is unique or not, In chropath -> //a[contains(text() , 'partial Link Text')]
 * 
 *      const webElement = await $('*=partial link text')
 * 
 *      eg:
 *      const linkButton = await $('*=te N');
 * 
 * 5. Using other attribute's partial value instead id-attribute
 *      To check if any attribute has unique partial-value or not, In chropath -> //tagName[contains(@attrName , 'partialAttrValue')]
 *      NOTE: Attribute's value CANNOT have spaces
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]')
 * 
 * 6. Using text value
 *      To check if the text value is unique or not, In chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = await $('tagName=text value')
 * 
 * 7. Using partial text value
 *      To check if the partial text value is unique or not, In chropath -> //tagName[contains(text() , 'partial text value')]
 * 
 *      const webElement = await $('tagName*=partial text value')
 * 
 * 
 * 8. Using tagName
 *      To check if tagName is unique, In chropath -> //tagName
 * 
 *      const webElement = await $('<tagName>');
 * 
 *      eg:
 *      const loginButton = await $('<button>');
 * 
 *  9. Using className-attribute
 *      To check if class's attribute value is unique, In chropath -> //*[@class='classAttrValue']
 *      NOTE: class-Attribute's value CANNOT have spaces
 *      NOTE: . represents that value after it is value of class-Attribute
 * 
 *      const webElement = await $('.classAttrValue');
 * 
 */

/**
 * Steps to interact with webElement:
 *  1. Find the unique locator strategy to find webElement
 *  2. Based on the strategy, use respect code to find webElement
 *  3. once webElement is found, interact with webElement
 * 
 * To find webElement:
 *  function -> $
 * 
 */

