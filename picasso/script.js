// Setup code for Artist. You may ignore for now.

const cellSize = 25;

function setup(){
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas')
  background(220);
  stroke(200);
  for(let i = 0; i <= width; i+=cellSize){
    line(i, 0, i, width)
    line(0, i, height, i)
  }
  noLoop();
}

function draw(){
  // setup in middle
  translate(width/2, height/2)

  stroke(0)
  strokeWeight(2)
  // draw instructions
  picasso();

  // draw end position
  ellipse(0, 0, 10, 10)
}

function drawLineDown(steps){
  line(0, 0, 0, steps * cellSize)
  moveDown(steps)
}

function drawLineUp(steps){
  line(0, 0, 0, -steps * cellSize)
  moveUp(steps)
}

function drawLineRight(steps){
  line(0, 0, steps * cellSize, 0)
  moveRight(steps)
}

function drawLineLeft(steps){
  line(0, 0, -steps * cellSize, 0)
  moveLeft(steps)
}

function moveUp(steps){
  translate(0, -steps * cellSize)
}

function moveDown(steps){
  translate(0, steps * cellSize)
}

function moveRight(steps){
  translate(steps * cellSize, 0)
}

function moveLeft(steps){
  translate(-steps * cellSize, 0)
}