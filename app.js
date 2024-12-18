const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");
let mode = "time";

output.style.fontSize = "24px";
output.style.fontWeight = "bold";

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

function update() {
  output.textContent = format(mode);
}

fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");
function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "date":
      return now.toLocaleDateString();
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    default:
      return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }
}

setInterval(() => {
  output.textContent = format(mode);
}, 10);
