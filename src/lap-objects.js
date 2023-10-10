class LapData {
  constructor() {
    this.lapData = [];
  }
  get getLapData() {
    return this.lapData;
  }

  addData(data) {
    this.lapData.push(data);
  }

  clearData() {
    this.lapData = [];
  }
}

module.exports = { LapData };
