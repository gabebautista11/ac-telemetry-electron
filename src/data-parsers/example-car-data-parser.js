let json = require("../../example-data/rt-car-data.json");

class ExampleCarDataParser {
  constructor() {
    this.file = "example-data/rt-car-data.json";
  }

  get getJsonArray() {
    return json;
  }
}
module.exports = ExampleCarDataParser;
