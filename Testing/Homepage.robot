*** Settings ***
Documentation         This test script will test the page element and button  
Library               Selenium2Library 


*** Variables ***
${WEBSITE}          https://fiversity.vercel.app/
${BROWSER}          Chrome 
${Page}             30s


*** Test Cases ***
Open Broswer and open Fiversity Start Page 
     Open Browser   ${WEBSITE}    ${BROWSER}
     Capture Element Screenshot        xpath:/html/body/div/section/div/div/div/div/div[2]/img    
     Wait Until Element Is Visible     xpath:/html/body/div/section/div/div/div/div/div[1]/div/a       timeout=${Page}     error=Get started is not showing                    
     Wait Until Element Is Visible     xpath:/html/body/div/section/div/div/div/div/div[1]/h2              
     Element Should Contain            xpath:/html/body/div/section/div/div/div/div/div[1]/h1           Get into student life in Tampere with Fiversity       
     [Teardown]    Close Browser