*** Settings ***
Documentation         This test script will test the page existence and page latency 
Library               Selenium2Library 


*** Variables *** 
${WEBSITE URL}         https://fiversity.vercel.app/
${BROWSER}             Chrome


*** Test Cases *** 
Open Test Website And Close Browser 
      Open Test Website In Chrome 
      [Teardown]    Close Browser




*** Keywords *** 
Open Test Website In Chrome 
       Open Browser        ${WEBSITE URL}       ${BROWSER}
       Sleep               2
       Title Should Be     React App
       
