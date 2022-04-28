*** Settings ***
Documentation         This test script will test the about page component existence and page latency 
Library               Selenium2Library 


*** Variables *** 
${WEBSITE URL}         https://fiversity.vercel.app
${BROWSER}             Chrome
${Page}                30s


*** Test Cases *** 
Open About Page and Click Contact Now 
      Open Browser    ${WEBSITE URL}/about         ${BROWSER}
      Wait Until Element Is Visible    xpath:/html/body/div/div[2]/section/div/div/div/div/div[1]/h1    timeout=${Page}           
      Element Should Contain           xpath:/html/body/div/div[2]/section/div/div/div/div/div[1]/h1    Welcome to the Fiversity ,your go to website to get started in Tampere Fiversity
      Capture Page Screenshot          filename= selenium-screenshot-about.png
      [Teardown]                       Close Browser