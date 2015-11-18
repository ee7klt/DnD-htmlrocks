function handleDragStart(e) {
  this.style.opacity = '0.4';
}

var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart,false);
});

function count_rabbits() {
  for (var i = 1; i <= 3; i++) {
    console.log("Rabbit "+i+" out of the hat");
  }
}
