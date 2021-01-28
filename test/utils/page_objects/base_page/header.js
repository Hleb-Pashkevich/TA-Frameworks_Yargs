const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", "div.header .top-navigation__item");
        this.contactUsButton = new Element("Contact Us Button", ".cta-button-ui");
    };
    clickContacktUs(){
        return this.contactUsButton.click();
    };
};

module.exports = Header;