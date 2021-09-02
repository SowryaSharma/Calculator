var x = "";
function apnd(s) {
  x += s;
  document.getElementById("display").innerHTML = x;
}

function cal() {
  document.getElementById("display").innerHTML = eval(x);
  x = eval(x);
}

function cl() {
  x = "";
  document.getElementById("display").innerHTML = "";
}
