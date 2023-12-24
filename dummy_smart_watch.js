function getCurrentDateTime() {
  const now = new Date();

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return { date, time };
}

function displayCurrentDateTime() {
  const { date, time } = getCurrentDateTime();

  const dateElement = document.getElementById('currentDate');
  const timeElement = document.getElementById('currentTime');

  dateElement.textContent = date;
  timeElement.textContent = time;
}

window.onload = function() {
  displayCurrentDateTime();
  setInterval(displayCurrentDateTime, 1000);
};
const dial = document.querySelector('.dial');
const radius = 4600;

for (let i = 0; i < 64; i++) {
  const tick = document.createElement('div');
  tick.className = 'tick';
  tick.style.transform = `rotate(${i * (360 / 64)}deg) translate(-50%, -${radius}%)`;
  dial.appendChild(tick);
}
