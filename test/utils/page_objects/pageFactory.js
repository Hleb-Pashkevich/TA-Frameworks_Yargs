const HomePage = require("./home_page/home_page");
const OurWorkPage = require("./our_work_page/our_work_page");
const BasePage = require("./base_page/base_page");
const CareersPage = require("./careers_page/careers_page.js");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Careers":
                return new CareersPage();
            case "Our Work":
                return new OurWorkPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;