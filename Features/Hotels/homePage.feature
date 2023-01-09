Feature: Dates
        Background:
        Given I am on Hotels

@TC-17
Scenario: Verify for current month
# Given I am on Hotels
When I click on Dates
And I verify current month is displayed
# And I verify past dates are disabled
# Then I verify back button on current month is disabled

@TC-24
Scenario:Verify error is displayed when user submits the empty feedback form      
# Given I am on Hotels
When I click on Sign In
And I click Feedback
And I click Submit
And I verify error message is displayed
Then I verify star boxes section is in a red dotted box

@TC-30
Scenario: Verify invalid phone number error
# Given I am on Hotels
When I scroll to get the app button
When I enter '0000000000' in Phone number
When I click on “Get the app“ button
Then I verify “Please enter a valid phone number.“ error is displayed

@TC-18
Scenario: Verify user can update number of guests on Home page
# Given I am on Hotels
When I click on Travelers
# When I select Adults as <number>
# When I select "Children" as 3
# When I select first child age: 4
# When I select second child age: under 1
# When I select third child age: 7
# When I click Done
# Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4


@TC-31
 Scenario Outline: Verify user is able to change language
        # Given I am on Hotels
        When I change language to <languageOption>
        Then I verify language got changed to <language>
​
        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |


@TC-25
Scenario Outline: Verify user can submit feedback after completing the feedback form
Given I am on Hotels
When I click on “Sign in”
When I click “Feedback”
When I select any star-rating
When I Enter 'any' in comments
When I select 'any' option for “How likely are you to return to Hotels.com?”
# When I select any answer for “Prior to this visit, have you ever booked on Hotels.com?”
# When I select any answer for ”Did you accomplish what you wanted to do on this page?”
Click on Submit button
Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed