let speedData = [null];
let labels = [null];

createSpeedGraph();
createGearGraph();

window.carDataAPI.getCarData((event, data, id) => {
  //console.log(data);
  labels.push(data.carPositionNormalized);
  graphSpeed(data.speedKmh);
  graphGear();
});

function createSpeedGraph() {
  const ctx = document.getElementById("speed-graph");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Speed (KPH)",
          data: speedData,
          borderWidth: 4,
        },
      ],
    },
    options: {
      pointRadius: 0,
      scales: {
        y: {
          title: {
            display: true,
            text: "Speed (km/h)",
          },
          beginAtZero: true,
        },
        x: {
          title: {
            display: true,
            text: "Position On Track",
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
}

function createGearGraph() {}

function graphSpeed(speed) {
  speedData.push(speed);
}
