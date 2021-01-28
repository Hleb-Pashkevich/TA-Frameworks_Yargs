class Element {
    constructor(elementName, selector, xpath) {
        if (xpath) {
            this.element = element(by.xpath(selector));
        } else {
            this.element = element(by.css(selector));
        }
        this.elementName = elementName;
    }
    click() {
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();
        return elementText;
    };
    sendKeys(text) {
        return this.element.sendKeys(text);
    };
};

module.exports = Element;