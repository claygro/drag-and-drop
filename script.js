var move = document.querySelector(".move");
move.addEventListener("mousedown", mousedown);

function mousedown() {
  move.addEventListener("mousemove", mousemove);
  move.addEventListener("mouseup", mouseup);
  function mousemove(e) {
    var x = e.clientX - 100 + "px";
    var y = e.clientY - 100 + "px";
    this.style.left = x;
    this.style.top = y;
  }

  function mouseup() {
    move.removeEventListener("mousemove", mousemove);
  }
}
