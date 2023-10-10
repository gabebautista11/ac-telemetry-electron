app = new PIXI.Application({ background: 0xffffff });
document.body.appendChild(app.view);
let racingLineGraphics = new PIXI.Graphics();
racingLineGraphics.lineStyle(3, 0xff0000, 1);
let trackImage = new PIXI.Sprite();

let num = 0;
async function drawTrack() {
  let trackAsset = await PIXI.Assets.load(
    "../../../tracks/red_bull_ring_gp/red_bull_ring.png"
  );
  //load image first to make it fit the screen
  trackImage = new PIXI.Sprite(trackAsset);
  app.renderer.resize(trackImage.width, trackImage.height);
  racingLineGraphics.position.x = 620.875;
  racingLineGraphics.position.y = 401.055;
  app.stage.addChild(trackImage);
  //drawLap();
  app.stage.addChild(racingLineGraphics);
}

async function drawLap() {
  let data = await window.getExampleData.exampleDataJSON();
  const start = data[0];

  racingLineGraphics.moveTo(start.carCoordinatesX, start.carCoordinatesZ);

  data.forEach((element) => {
    racingLineGraphics.lineTo(element.carCoordinatesX, element.carCoordinatesZ);
  });
  app.stage.addChild(racingLineGraphics);
}

function realTimeDraw(data) {
  // if (num == 0) {
  //   racingLineGraphics.moveTo(data.carCoordinatesX, data.carCoordinatesZ);
  //   num++;
  // }
  //racingLineGraphics.lineTo(data.carCoordinatesX, data.carCoordinatesZ);
  racingLineGraphics.beginFill(0xff00ff);
  racingLineGraphics.drawCircle(data.carCoordinatesX, data.carCoordinatesZ, 2);
  racingLineGraphics.endFill();
}

window.carDataAPI.getCarData((event, data) => {
  console.log(data);
  realTimeDraw(data);
});

drawTrack();
