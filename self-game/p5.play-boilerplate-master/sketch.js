var form1
function setup() {
  createCanvas(displayWidth, displayHeight);
 form1 = new Form ();
}



function draw() {
  background(0,0,0);  
  form1.display();
  drawSprites();
}