const { ipcMain } = require("electron");

function getCarData() {
  ipcMain.handle("getCarDataJson", () => {
    const ExampleCarDataParser = require("../../data-parsers/example-car-data-parser");
    let exampleData = new ExampleCarDataParser();
    data = exampleData.getJsonArray;
    return data;
  });
}

module.exports = { getCarData };
