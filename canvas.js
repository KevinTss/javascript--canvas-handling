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
