// scripts.js

// Generate gauges
const tempCtx = document.getElementById('tempGauge').getContext('2d');
const humCtx = document.getElementById('humGauge').getContext('2d');
const speedCtx = document.getElementById('speedGauge').getContext('2d');
const rpmCtx = document.getElementById('rpmGauge').getContext('2d');

function createGauge(ctx, label, min, max) {
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [label],
      datasets: [{
        label: label,
        data: [0, 100],
        backgroundColor: ['#00ffae', '#333'],
        borderWidth: 0,
        cutout: '80%'
      }]
    },
    options: {
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  });
}

const tempGauge = createGauge(tempCtx, '°C', 0, 100);
const humGauge = createGauge(humCtx, '%', 0, 100);
const speedGauge = createGauge(speedCtx, 'km/h', 0, 100);
const rpmGauge = createGauge(rpmCtx, 'RPM', 0, 10000);

// Simulate Data (Replace this with real data from ESP32)
setInterval(() => {
  updateGauge(tempGauge, Math.random() * 40);
  updateGauge(humGauge, Math.random() * 100);
  updateGauge(speedGauge, Math.random() * 60);
  updateGauge(rpmGauge, Math.random() * 8000);
}, 2000);

function updateGauge(gauge, value) {
  gauge.data.datasets[0].data[0] = value;
  gauge.data.datasets[0].data[1] = 100 - value;
  gauge.update();
}

// Camera Control
function setCamera(varName, value) {
  fetch(`http://192.168.8.157/control?var=${varName}&val=${value}`)
    .then(response => console.log(`Camera set ${varName}=${value}`));
}

function toggleFlash() {
  fetch(`http://192.168.8.157/control?var=led_intensity&val=1`);
}

function flipVertical() {
  fetch(`http://192.168.8.157/control?var=vflip&val=1`);
}

function flipHorizontal() {
  fetch(`http://192.168.8.157/control?var=hmirror&val=1`);
}
