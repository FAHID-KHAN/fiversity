*** Settings ***
Documentation         This test script will test the about page component existence and page latency 
Library               Selenium2Library 


*** Variables *** 
${WEBSITE URL}         https://fiversity.vercel.app
${BROWSER}             Chrome
${Page}                30s

*** Test Cases ***
This Test Cases Takes the explore page as screenshot when the data has been fetched 
    Open Browser       ${WEBSITE URL}/PlacesToEat      ${BROWSER}
    Wait Until Element Is Visible  xpath:/html/body/div    timeout=${Page}
    Sleep         5
    Capture Page Screenshot   filename=selenium-screenshot-placestoeat.png
    [Teardown]         Close Browser