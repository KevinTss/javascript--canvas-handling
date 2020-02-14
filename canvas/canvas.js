const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

function drawRectangle(
  context,
  positionFromX,
  positionFromY,
  rectSizeX,
  rectSizeY
) {
  context.fillStyle = "#A48B74";
  return context.fillRect(positionFromX, positionFromY, rectSizeX, rectSizeY);
}

drawRectangle(context, 10, 200, 500, 50);

console.log(canvas);

// Line
context.beginPath();
context.moveTo(30, 30);
context.lineTo(100, 100);
context.strokeStyle = "#E4CCAC";
context.stroke();

// Arc
context.beginPath();
context.arc(300, 100, 30, 0, Math.PI * 2);
context.stroke();

let isAddMode = true;
let coordinateX = 10;
function animateCanvas() {
  requestAnimationFrame(animateCanvas);
  // This will also remove first chapes already built
  context.clearRect(0, 0, innerWidth, innerHeight);
  drawRectangle(context, coordinateX, 400, 50, 50);
  if (coordinateX >= 500) {
    isAddMode = false;
  } else if (coordinateX <= 10) {
    isAddMode = true;
  }
  if (isAddMode) {
    coordinateX += 15;
  } else {
    coordinateX -= 15;
  }
}

animateCanvas();
