
var x = new Array(10000);
var y = new Array(10000);

function setup() {
  createCanvas(windowWidth, windowHeight,P2D);
  background(0);
  for(var i=0; i<x.length-1; i++) { 
   x[i]=width/2.0;
   y[i]=height/2.0;
  }
}

function draw() {
  stroke(255);
  noFill();
  blendMode(ADD);
  for(var i=0; i<x.length-1; i++) { 
  point(x[i],y[i]);
  x[i] = x[i]+random(-4,4);
  y[i] = y[i]+random(-4,4);
  }
  blendMode(BLEND);
  fill(0,5);
  noStroke();
  rect(0,0, width,height)
}