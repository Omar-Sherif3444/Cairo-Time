const timers = document.querySelectorAll("h1");
const zone = document.querySelector(".zone");
function updateClock() {
  const dt = new Date();

  timers.forEach((timer) => {
    const met = timer.dataset.method;
    const format = timer.dataset.format;

    let value = dt[met]();

    formatTime(format, value, timer);
  });
}

function formatTime(format, value, timer) {
  if (format == "hours") {
    pmORam(value);
    twelveHours(value, timer);
  } else if (format == "padding") {
    padding(value, timer);
  }
}

function twelveHours(value, timer) {
  if (value > 12) value -= 12;
  if (value === 0) value = 12;

  timer.innerHTML = value;
}

function pmORam(value) {
  zone.innerHTML = value >= 12 ? "PM" : "AM";
}

function padding(value, timer) {
  timer.innerHTML = String(value).padStart(2, "0");
}
updateClock();
setInterval(updateClock, 1000);
