function setup() {
  createCanvas(100, 900);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
 
}

function draw() {
  background(000);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  
  if (vol>0.2)
  {
    playviddy();
    document.querySelector(".penis").innerHTML ="Almost the voice of a trash metal god";
 
  }
  if (vol<0.01)
  {
    pauzeviddy();
    document.querySelector(".penis").innerHTML ="Train your metal voice";
 
  }
  
  fill(400);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}

function playviddy()
{
  viddy = document.querySelector(".videoke");
  viddy.play();
}
function pauzeviddy()
{
  viddy = document.querySelector(".videoke");
  viddy.pause();
}