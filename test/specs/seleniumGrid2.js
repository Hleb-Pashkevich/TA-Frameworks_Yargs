const {expect} = require("chai");
const webDriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const {until} = require("selenium-webdriver");


describe('selenium grid test',  function() {
    let driver;

    this.timeout(60000);
    beforeEach(function () {
        driver = new webDriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webDriver.Capabilities.chrome())
            .build();
    });

    afterEach(function (){
        driver.close();
    })

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    it('should select Young Specialists skill', async function () {
        driver.manage().window().maximize();

        await driver.get('https://www.epam.com');
        await driver.wait(until.elementLocated(By.css('button.cookie-disclaimer__button'), 5000));
        await driver.findElement(By.css('button.cookie-disclaimer__button')).click();
        await driver.findElement(By.css('li a[href *= careers]')).click();
        await driver.wait(until.elementLocated(By.css('span.select2-selection__arrow')), 5000);
        const locationArrow = driver.findElement(By.css('span.select2-selection__arrow'));
        driver.executeScript('arguments[0].scrollIntoView(true);', locationArrow);
        await locationArrow.click();
        await driver.findElement(By.css('li[id *= -Minsk')).click();
        const skillsArrow = driver.findElement(By.css('div.selected-params'));
        await skillsArrow.click();
        await sleep(100);
        await driver.findElement(By.xpath('//span[contains(text(), \'Young Specialists\')]')).click();
        await skillsArrow.click();
        const youngSpecialistItem = await driver.findElement(By.css('ul.selected-items li[data-value=\'Young Specialists\']')).getText();
        expect(youngSpecialistItem).to.include('YOUNG SPECIALISTS');
    });
});