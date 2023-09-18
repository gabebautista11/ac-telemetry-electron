class CarPositionParser {
  constructor(carJsonData) {
    this.xPos = carJsonData.carCoordinatesX;
    this.yPos = carJsonData.carCoordinatesY;
  }

  get xPos() {
    return this.xPos;
  }

  get yPos() {
    return this.yPos;
  }
}
