

function handleclick(e) {
  console.log("button clicked")
}

var el = document.getElementById("a");
console.log("el = " + el);
el.addEventListener("click", special, false);

function special() {
  console.log("I am special");
}
