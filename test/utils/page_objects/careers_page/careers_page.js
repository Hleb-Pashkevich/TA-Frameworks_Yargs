const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");
const logger = require('../../../config/logger.config.js');
const {browser} = require("protractor");
const {element} = require("protractor");
const {Key} = require("selenium-webdriver");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/careers';
    }
    open() {
        return super.open(this.url);
    }
    getLocationDropDown() {
        return new Element('Get location arrow', 'span.select2-selection__arrow');
    }
    getLocationDropDownAction() {
        let locationDropDown = element(by.css('span.select2-selection__arrow'));
        logger.info(`Clicking drop-down arrow in "Location" field`)
        browser.actions().click(locationDropDown).perform();
    }
    acceptCookie() {
        return new Element ('Click Accept Cookie', 'button.cookie-disclaimer__button');
    }
    acceptCookieAction() {
        let locationList = element(by.css('button.cookie-disclaimer__button'));
        logger.info(`Clicking [accept cookie] button`)
        browser.actions().click(locationList).perform();
    }
    selectLocation(location) {
        logger.info(`selecting location ${location}`)
        return new Element('Select location', `//li[text()='${location}']`, true).click();
    }
    getSkills() {
        return new Element('Expand Skills drop-down', `div.selected-params`);
    }
    getSkillsAction() {
        let locationDropDown = element(by.css('div.selected-params'));
        logger.info(`Clicking drop-down arrow in "Skills" field`)
        browser.actions().click(locationDropDown).perform();
    }
    getYoungSpecialist() {
        return new Element('Select Young Specialist', '//span[contains(text(), \'Young Specialists\')]', true)
    }
    getYoungSpecialistAction() {
        let locationDropDown = element(by.xpath('//span[contains(text(), \'Young Specialists\')]'));
        logger.info(`Ticking "Young Specialists" checkbox`)
        browser.actions().click(locationDropDown).perform();
    }
    inputAction() {
        let Input = element(by.css('#new_form_job_search_1445745853_copy-keyword'));
        logger.info(`Entering text in "Job ID" field`)
        browser.actions().click(Input).sendKeys(Key.SHIFT + 'software testing').perform();
    }
    getJobSearchForm() {
        return new Element('Get Job ID field', '#new_form_job_search_1445745853_copy-keyword')
    }
    getElement() {
        logger.info(`Identifying selected "Young Specialists" element`)
        return new Collection('Get results', 'ul.selected-items li[data-value=\'Young Specialists\']');
    }

}

module.exports = CareersPage;