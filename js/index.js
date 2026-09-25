let timers = document.querySelectorAll("h1");
let zone = document.querySelector(".zone");
function updateClock() {
  let dt = new Date();

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
  if (value > 12) {
    value -= 12;
  } else if (value == 0) {
    value = 12;
  }

  timer.innerHTML = value;
}

function pmORam(value) {
  if (value >= 12) {
    zone.innerHTML = "PM";
  } else {
    zone.innerHTML = "AM";
  }
}

function padding(value, timer) {
  timer.innerHTML = String(value).padStart(2, "0");
}
updateClock();
setInterval(updateClock, 1000);
