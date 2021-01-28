const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com";
      this.sections = new Collection("Sections", "div.section:not(.header)");
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = HomePage;