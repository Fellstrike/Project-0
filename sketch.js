function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(200, 155, 255);

  let size = 750;
  let red = 200;
  let green = 155;
  let blue = 255;
  let fillColor = color(red, green, blue);
  let xPos = 400;
  let yPos = 10;
  let count = 0;

  noStroke();
  noFill();
  drawShape(xPos, yPos + 25, color(120, 120, 120), size - 5);
  stroke(155);
  while (size >= 0)
  {
    drawShape(xPos, yPos, fillColor, size);
    size = size - 5;
    red --;
    green -= 2
    if (count >= 1)
    {
      blue--;
      count = 0;
    }
    else
    {
      count++;
    }
    fillColor = color(red, green, blue);
    stroke(red +10, green + 20, blue + 5);
  }
}

function drawShape(x, y, fillColor, size) 
{
  fill(fillColor);
  beginShape();
  vertex(x, y);
  bezierVertex(x + size , y + size, x - size, y + size, x, y);
  endShape(CLOSE);
}
