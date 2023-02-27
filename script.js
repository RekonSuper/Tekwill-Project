window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen");
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 1800);
});

const counters = [
  { count: 0, element: document.querySelectorAll(".count")[0], finalValue: 549 },
  { count: 0, element: document.querySelectorAll(".count")[1], finalValue: 42 },
  { count: 0, element: document.querySelectorAll(".count")[2], finalValue: 22 },
];

function updateCount(counter) {
  counter.count++;
  counter.element.textContent = counter.count;
  if (counter.count >= counter.finalValue) {
    clearInterval(counter.interval);
  }
}

counters.forEach((counter) => {
  counter.interval = setInterval(() => {
    updateCount(counter);
  }, 50); // adjust the interval (in milliseconds) to change the speed of counting
});
