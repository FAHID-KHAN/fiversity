*** Settings ***
Documentation         This test script will test the about page component existence and page latency 
Library               Selenium2Library 


*** Variables *** 
${WEBSITE URL}         https://fiversity.vercel.app
${BROWSER}             Chrome
${Page}                30s

*** Test Cases *** 
Open Contact Page and Check the boxes 
       Open Browser     ${WEBSITE URL}/contact   ${BROWSER} 
       Wait Until Element Is Visible     xpath:/html/body/div/div[2]/h1     timeout=${Page}
       Element Should Contain            xpath:/html/body/div/div[2]/h1     Contact Us
       Input Text                        xpath:/html/body/div/div[3]/div/div/form/div[1]/input     text=Fahid Khan
       Input Text                        xpath:/html/body/div/div[3]/div/div/form/div[2]/input     text=012345678
       Input Text                        xpath:/html/body/div/div[3]/div/div/form/div[3]/input     text=abc@email.com
       Input Text                        xpath:/html/body/div/div[3]/div/div/form/div[4]/textarea  text=Hi this 
       Click Button                      xpath:/html/body/div/div[3]/div/div/form/div[5]/button    
       Alert Should Be Present           text= My name is Fahid Khan.number is 012345678,email is abc@email.com and here is what i want to say  Hi this
       [Teardown]                        Close Browser 