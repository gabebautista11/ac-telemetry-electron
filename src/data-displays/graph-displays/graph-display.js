let speedData = [null];
let labels = [null];
let speedChart = null;
console.log("loaded graph display file");
createSpeedGraph();
createGearGraph();

window.carDataAPI.getCarData((event, data, id) => {
  console.log("getting graph data");
  labels.push(data.carPositionNormalized);
  speedChart.data.labels.push(data.carPositionNormalized);
  graphSpeed(data.speedKmh);
  graphGear();
});

function createSpeedGraph() {
  const ctx = document.getElementById("speed-graph");

  speedChart = new Chart(ctx, {
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
  console.log("updating speed");
  speedData.push(speed);
  speedChart.data.datasets[0].data.push(speed);
  
}

function graphGear() {}
function updateGraph(){
  speedChart.update('none');
}

setInterval(updateGraph, 1000);