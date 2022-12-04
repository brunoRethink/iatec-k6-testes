import { chromium, firefox } from "k6/x/browser";

export default function() {
    let browser = chromium.launch({ headless: false});
    let page = browser.newPage();
    
    const navigationPromise = page.waitForNavigation()

    page.goto('https://7edu-br-financial-sandbox.educadventista.org/')

    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('#username')
    page.click('#username')
    
    page.waitForSelector('body > .login-screen > .login-content')
    page.click('body > .login-screen > .login-content')
    
    page.waitForSelector('.login-screen > .login-content > #login-form-data > .container-checkbox > .checkmark')
    page.click('.login-screen > .login-content > #login-form-data > .container-checkbox > .checkmark')
    
    page.waitForSelector('#btnLogin')
    page.click('#btnLogin')
    
    navigationPromise
    
    page.waitForSelector('.ng-scope > .ng-isolate-scope > .modal-content > .modal-header > .close')
    page.click('.ng-scope > .ng-isolate-scope > .modal-content > .modal-header > .close')
    
    page.waitForSelector('nav > #side-menu > .sidebar-nav > #\\31 > .side-menu-item-link')
    page.click('nav > #side-menu > .sidebar-nav > #\\31 > .side-menu-item-link')
    
    browser.close()
}
