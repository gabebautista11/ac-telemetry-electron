class LapData {
  constructor() {
    this.lapData = [];
  }
  get lapData() {
    return this.lapData;
  }

  addData(data) {
    this.lapData.push(data);
  }

  clearData() {
    this.lapData = [];
  }
}

export { LapData };
