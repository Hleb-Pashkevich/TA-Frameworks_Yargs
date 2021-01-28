const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const {browser} = require('protractor');



describe('Careers_Search results verification',  function() {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('should select Young Specialists skill', async function() {
        await PageFactory.getPage('Careers').open();
        await PageFactory.getPage('Careers').acceptCookie().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getJobSearchForm().sendKeys('software testing');
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getLocationDropDown().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').selectLocation('Minsk');
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getSkills().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getYoungSpecialist().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getSkills().click();
        await PageFactory.getPage('Careers').wait(1000);
        const youngSpecialistItem = await PageFactory.getPage('Careers').getElement().getTexts();
        expect(youngSpecialistItem).to.include('YOUNG SPECIALISTS');

    });
});

