$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create an Account",
  "description": "As a user i want to create an account.",
  "id": "create-an-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8093137800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Create Account Successfully",
  "description": "",
  "id": "create-an-account;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Create an Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName \"Robin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName \"Singh\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Password \"Robin1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Address line \"1 Nice Building\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter City \"Maryland\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select state  \"Ohio\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter zipcode \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Mobile number \"01234567893\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Address Alias \"main home\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify message \"My account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 249241600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6052372700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iEnterEmail()"
});
formatter.result({
  "duration": 176489900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 85203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robin",
      "offset": 19
    }
  ],
  "location": "CreateAccount.iEnterFirstName(String)"
});
formatter.result({
  "duration": 6416465100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Singh",
      "offset": 18
    }
  ],
  "location": "CreateAccount.iEnterLastName(String)"
});
formatter.result({
  "duration": 112960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robin1234",
      "offset": 18
    }
  ],
  "location": "CreateAccount.iEnterPassword(String)"
});
formatter.result({
  "duration": 110447000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 22
    }
  ],
  "location": "CreateAccount.iEnterAddressLine(String)"
});
formatter.result({
  "duration": 103084300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maryland",
      "offset": 14
    }
  ],
  "location": "CreateAccount.iEnterCity(String)"
});
formatter.result({
  "duration": 102707300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iSelectState(String)"
});
formatter.result({
  "duration": 167789400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iEnterZipcode(String)"
});
formatter.result({
  "duration": 104576300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 17
    }
  ],
  "location": "CreateAccount.iEnterCountry(String)"
});
formatter.result({
  "duration": 83500200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01234567893",
      "offset": 23
    }
  ],
  "location": "CreateAccount.iEnterMobileNumber(String)"
});
formatter.result({
  "duration": 111696600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "main home",
      "offset": 23
    }
  ],
  "location": "CreateAccount.iEnterAddressAlias(String)"
});
formatter.result({
  "duration": 110493200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 9333229200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 16
    }
  ],
  "location": "CreateAccount.verifyMessage(String)"
});
formatter.result({
  "duration": 47061400,
  "status": "passed"
});
formatter.after({
  "duration": 687142700,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In on Login Page",
  "description": "As a user I want to login in to automationpractice.com Website",
  "id": "sign-in-on-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4889336200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should navigate to login page successfully",
  "description": "",
  "id": "sign-in-on-login-page;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that \"AUTHENTICATION\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6671442600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyThatMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 44483000,
  "status": "passed"
});
formatter.after({
  "duration": 683507600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Regression"
    },
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ],
      "line": 17,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8813696000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 8170170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 75116600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 93878400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8759707800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22072457600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [581d3752175d243fa6502cc48b7ea7fd, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59557}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59557/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 581d3752175d243fa6502cc48b7ea7fd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"An email address required.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 812915000,
  "status": "passed"
});
formatter.before({
  "duration": 9250554300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7937940000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 66667700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 55567100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6893334800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22073551000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d2bf53cad3763327ddd9fcf850d6bb4, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59621}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59621/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d2bf53cad3763327ddd9fcf850d6bb4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"Password is required.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 826652800,
  "status": "passed"
});
formatter.before({
  "duration": 8920876900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1462313500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 61318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 82591400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1379227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22026833000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [37a4b4a234fc1264f50c82b85782ea49, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59673}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59673/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 37a4b4a234fc1264f50c82b85782ea49\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"Invalid email address.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 847408400,
  "status": "passed"
});
formatter.before({
  "duration": 6816361800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should get Error Message with Invalid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-get-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 9132214000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 63640500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 70425800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 11825336300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "LoginTestPage.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22065585100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [167bffb43faa5d03949e54e0763cdf34, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027alert alert-danger\u0027])//ol//li}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59723}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59723/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 167bffb43faa5d03949e54e0763cdf34\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.getVerifyAuthenticationFailedMessage(SignInPage.java:84)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iShouldSeeErrorMessage(LoginTestPage.java:47)\r\n\tat ✽.Then I should see error message \"Authentication failed.\"(signIn.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 787706000,
  "status": "passed"
});
formatter.before({
  "duration": 10093941900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should login with Valid Credentials",
  "description": "",
  "id": "sign-in-on-login-page;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    },
    {
      "line": 22,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter email \"Georgesmith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password \"acd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 9139586800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgesmith@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "duration": 70230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acd1234",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "duration": 64629400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "duration": 9382359400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.signOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 20049543500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Log me out\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b0db08653a30ea8fa3933ebf2ae18409, findElement {using\u003dxpath, value\u003d//a[@title\u003d\u0027Log me out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59778}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59778/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b0db08653a30ea8fa3933ebf2ae18409\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:38)\r\n\tat com.automation.pages.SignInPage.verifyLogOutLink(SignInPage.java:90)\r\n\tat com.automation.cucumber.steps.LoginTestPage.signOutLinkIsDisplayed(LoginTestPage.java:54)\r\n\tat ✽.Then Sign out link is displayed(signIn.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 810171600,
  "status": "passed"
});
formatter.before({
  "duration": 1884286800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should LogOut SuccessFully",
  "description": "",
  "id": "sign-in-on-login-page;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    },
    {
      "line": 30,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter email \"Georgesmith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"acd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Sign In Link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInLink()"
});
formatter.result({
  "duration": 20030237000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027ANCHALT\u0027, ip: \u0027192.168.1.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e977df250d3f7786b0ecd1beaaab12dc, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Sign in\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\thaku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59834}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59834/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e977df250d3f7786b0ecd1beaaab12dc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:27)\r\n\tat com.automation.pages.HomePage.setClickOnSignInLink(HomePage.java:43)\r\n\tat com.automation.cucumber.steps.LoginTestPage.iClickOnSignInLink(LoginTestPage.java:20)\r\n\tat ✽.When I Click on Sign in link(signIn.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgesmith@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acd1234",
      "offset": 18
    }
  ],
  "location": "LoginTestPage.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestPage.iClickOnSignOutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestPage.signInLinkDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 750552200,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "I want to verify woman category page links working and you can buy products form menu",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12646516300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Women Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can verify \"WOMEN\" text on Screen.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 84400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnWomenTab()"
});
formatter.result({
  "duration": 9246627600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 14
    }
  ],
  "location": "womenCatagoryPage.iCanVerifyTextOnScreen(String)"
});
formatter.result({
  "duration": 32309900,
  "status": "passed"
});
formatter.after({
  "duration": 661072400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    },
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10729104300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnWomenTab()"
});
formatter.result({
  "duration": 8086661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "womenCatagoryPage.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 7677722700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "womenCatagoryPage.iChangeQuantity(String)"
});
formatter.result({
  "duration": 181052300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 13
    }
  ],
  "location": "womenCatagoryPage.selectSize(String)"
});
formatter.result({
  "duration": 77637600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 15
    }
  ],
  "location": "womenCatagoryPage.selectColour(String)"
});
formatter.result({
  "duration": 52238600,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 67482400,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.popupWillDisplay()"
});
formatter.result({
  "duration": 2000664900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "womenCatagoryPage.verifyTheMessage(String)"
});
formatter.result({
  "duration": 37093600,
  "error_message": "org.junit.ComparisonFailure: Message not Display expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.womenCatagoryPage.verifyTheMessage(womenCatagoryPage.java:50)\r\n\tat ✽.Then Verify the message \"Product successfully added to your shopping cart\"(womenCategory.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 866778900,
  "status": "passed"
});
formatter.before({
  "duration": 8999579100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 40100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnWomenTab()"
});
formatter.result({
  "duration": 6242940300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "womenCatagoryPage.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 8084854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "womenCatagoryPage.iChangeQuantity(String)"
});
formatter.result({
  "duration": 181694700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 13
    }
  ],
  "location": "womenCatagoryPage.selectSize(String)"
});
formatter.result({
  "duration": 64279200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 15
    }
  ],
  "location": "womenCatagoryPage.selectColour(String)"
});
formatter.result({
  "duration": 48570100,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 55058200,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.popupWillDisplay()"
});
formatter.result({
  "duration": 2005030800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "womenCatagoryPage.verifyTheMessage(String)"
});
formatter.result({
  "duration": 33846000,
  "error_message": "org.junit.ComparisonFailure: Message not Display expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.womenCatagoryPage.verifyTheMessage(womenCatagoryPage.java:50)\r\n\tat ✽.Then Verify the message \"Product successfully added to your shopping cart\"(womenCategory.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 912146100,
  "status": "passed"
});
formatter.before({
  "duration": 9584186100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnWomenTab()"
});
formatter.result({
  "duration": 12077710700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "womenCatagoryPage.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 6240943900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "womenCatagoryPage.iChangeQuantity(String)"
});
formatter.result({
  "duration": 172209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 13
    }
  ],
  "location": "womenCatagoryPage.selectSize(String)"
});
formatter.result({
  "duration": 32306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 15
    }
  ],
  "location": "womenCatagoryPage.selectColour(String)"
});
formatter.result({
  "duration": 51430900,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 66626600,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.popupWillDisplay()"
});
formatter.result({
  "duration": 2010062300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "womenCatagoryPage.verifyTheMessage(String)"
});
formatter.result({
  "duration": 33848800,
  "error_message": "org.junit.ComparisonFailure: Message not Display expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.womenCatagoryPage.verifyTheMessage(womenCatagoryPage.java:50)\r\n\tat ✽.Then Verify the message \"Product successfully added to your shopping cart\"(womenCategory.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 842601300,
  "status": "passed"
});
formatter.before({
  "duration": 9800354300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnWomenTab()"
});
formatter.result({
  "duration": 8805435600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "womenCatagoryPage.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 10229809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "womenCatagoryPage.iChangeQuantity(String)"
});
formatter.result({
  "duration": 169911000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 13
    }
  ],
  "location": "womenCatagoryPage.selectSize(String)"
});
formatter.result({
  "duration": 65846200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 15
    }
  ],
  "location": "womenCatagoryPage.selectColour(String)"
});
formatter.result({
  "duration": 55777800,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 58167300,
  "status": "passed"
});
formatter.match({
  "location": "womenCatagoryPage.popupWillDisplay()"
});
formatter.result({
  "duration": 2003392300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "womenCatagoryPage.verifyTheMessage(String)"
});
formatter.result({
  "duration": 31362400,
  "error_message": "org.junit.ComparisonFailure: Message not Display expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.womenCatagoryPage.verifyTheMessage(womenCatagoryPage.java:50)\r\n\tat ✽.Then Verify the message \"Product successfully added to your shopping cart\"(womenCategory.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "womenCatagoryPage.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 865075000,
  "status": "passed"
});
});