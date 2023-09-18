const ExampleCarDataParser = require("../src/data-parsers/example-car-data-parser");

let canvas = document.getElementById("course-canvas");
ctx = canvas.getContext("2d");

track = new Image();
track.src = "../tracks/red_bull_ring_gp/red_bull_ring.png";

track.onload = function () {
  ctx.drawImage(track, 0, 0);
  drawAllPositions(ctx, track);
};

function drawAllPositions(ctx, track) {
  let exampleData = new ExampleCarDataParser();
  data = exampleData.getJsonArray;
  console.log(data);
  ctx.translate(620.875, 401.055);
  ctx.beginPath();
  data.forEach((element, i) => {
    let xPos = element.carCoordinatesX;
    let ZPos = element.carCoordinatesZ;
    console.log(xPos, " ", ZPos);
    if (i == 0) {
      ctx.moveTo(xPos, ZPos);
      ctx.lineTo(xPos, ZPos);
    } else {
      ctx.lineTo(xPos, ZPos);
    }
  });
  ctx.stroke();
}
