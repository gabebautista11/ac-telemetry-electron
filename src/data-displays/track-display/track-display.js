app = new PIXI.Application({ background: 0xb2beb5, antialias: true });

async function drawTrack() {
  let trackAsset = await PIXI.Assets.load(
    "../../../tracks/red_bull_ring_gp/red_bull_ring.png"
  );
  //load image first to make it fit the screen
  let trackImage = new PIXI.Sprite(trackAsset);
  app.renderer.resize(trackImage.width, trackImage.height);
  document.body.appendChild(app.view);
  //add image to stage
  app.stage.addChild(trackImage);
  drawLap();
}

async function drawLap() {
  let racingLine = new PIXI.Graphics();
  let data = await window.getExampleData.exampleDataJSON();
  racingLine.position.x = 620.875;
  racingLine.position.y = 401.055;
  const start = data[0];
  racingLine.lineStyle(2, 0xff0000, 1);
  racingLine.moveTo(start.carCoordinatesX, start.carCoordinatesZ);

  data.forEach((element) => {
    racingLine.lineTo(element.carCoordinatesX, element.carCoordinatesZ);
  });

  app.stage.addChild(racingLine);
}

drawTrack();
