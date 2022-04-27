*** Settings ***
Documentation         This test script will test the about page component existence and page latency 
Library               Selenium2Library 


*** Variables *** 
${WEBSITE URL}         https://fiversity.vercel.app
${BROWSER}             Chrome

*** Test Cases *** 
Open Browser and go to service page 
      Open Browser      ${WEBSITE URL}/service     ${BROWSER}
      Wait Until Element Is Visible     xpath:/html/body/div/div[2]/h1
      Element Should Contain            xpath:/html/body/div/div[2]/h1         Our Services
      [Teardown]     Close Browser