/** Types:
 *      1. Absolute xpath
 *          a) starts with single slash (/)
 *          b) tells the route/navigation to reach a particular webElement from html-tag (or root-tag)
 *          c) not reliable, any changes in the webPage can break the absolute-xpath
 * 
 *          eg:
 *          /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/a[1]
 *          /html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[14]/a[1]
 * 
 *      2. Relative xpath
 *          a) starts with double slash (//)
 *          b) reliable bcz we can use tagName, attribute or test-value in any combination to create route to reach to a particular webElement.
 * 
 *      --> Direct xpath (simple xpath)
 *      --> Indirect xpath (advanced xpath)
 * 
 * 
 * 
 */

/**
 * Direct xpath (simple xpath)
 * 
 * 1. using attribute's value
 **     //tagName[@attrName="attribute value"]
 *      find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value"
 * 
 *      const webElement = await $('//tagName[@attrName="attribute value"]');
 * 
 * 2. using text value
 **     //tagName[text()="text value"]
 *      find the tag(tagName) in dom which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[text()="text value"]');
 * 
 * 3. using partial attribute's value
 **     //tagName[contains(@attrName , "partial attr value")]
 *      find the tag(tagName) in dom which has attribute(attrName) contains partial value as "partial attr value"
 * 
 *      const webElement = await $('//tagName[contains(@attrName , "partial attr value")]');
 * 
 * 4. using partial text value
 **     //tagName[contains(text() , "partial text value")]
 *      find the tag(tagName) in dom which has text equals to "text value"
 * 
 *      const webElement = await $('//tagName[contains(text() , "partial text value")]');
 * 
 * 
 * 
 * 5. using starting portion of attribute's value
 **     //tagName[starts-with(@attrName , "starting portion of attrName value")]
 *      find the tag(tagName) in dom which has attribute(attrName) starts-with "starting portion of attrName value"
 * 
 *      const webElement = await $('//tagName[starts-with(@attrName , "starting portion of attrName value")]')
 * 
 * 
 * 6. using starting portion of text value
 **     //tagName[starts-with(text() , "starting portion of text value")]
 *      find the tag(tagName) in dom which has text-value starts-with "starting portion of text value"
 * 
 *      const webElement = await $('//tagName[starts-with(text() , "starting portion of text value")]')
 * 
 * 7. using not-operator
 **     //tagName[not(@attrName="attribute value")]
 *      find the tag(tagName) in dom where attribute (attrName) is NOT value as "attribute value"
 * 
 **     //tagName[not(@attrName)]
 *      find the tag(tagName) in dom which does NOT have attribute (attrName)
 * 
 **     //tagName[not(contains(text() , "partial text value"))]  
 *      find the tag(tagName) in dom where text does NOT contain "partial text value"
 * 
 * 8. and/or operator
 **     //tagName[@attrName="attr value" and text()="text value"]  
 *      find the tag(tagName) in dom which has attribute (attrName) with value as "attribute value" AND text-value equals to "text value"
 * 
 **     //tagName[contains(text(), "partial text val") or starts-with(text() , "starting text value")]
 *      find the tag(tagName) in dom where text-value contains "partial text val" OR text-value starts-with ""starting text value""
 *  
 * 
 * NOTE:
 **     //tagName[@attrName]
 *      find the tag(tagName) in dom which has attribute (attrName)
 * 
 **     //tagName[text()]
 *      find the tag(tagName) in dom which has text-value
 * 
 **     //*[@attrName = "attr value"]
 *      find any tag in dom which has attribute (attrName) with value as "attribute value"
 * 
 **     //div[contains(text(), "partial text val") or starts-with(text() , "starting text value")]
 *      suppose div and button tags satisfy th condition(s)
 *      --> xpath will try to find div-tag only
 * 
 * 
 * 
 */