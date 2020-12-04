var form1, database
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
 form1 = new Form ();
 
}



function draw() {
  background(0,0,0);  
  form1.display();
  drawSprites();
}