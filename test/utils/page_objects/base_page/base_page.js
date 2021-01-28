const Header = require('./header');
const logger = require('../../../config/logger.config.js');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        logger.debug(`Waiting for ${waitInMilliseconds} ms`)
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrentUrl() {
        const currentUrl = browser.getCurrentUrl();
        return currentUrl;
    };
    open(url) {
        logger.info(`Opening ${url}`)
        return browser.get(url);
    };
};

module.exports = BasePage;