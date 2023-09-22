const { ipcMain } = require("electron");

function getCarData() {
  const ExampleCarDataParser = require("../../data-parsers/example-car-data-parser");
  ipcMain.handle("getCarDataJson", () => {
    let exampleData = new ExampleCarDataParser();
    data = exampleData.getJsonArray;
    return data;
  });
}

module.exports = { getCarData };
