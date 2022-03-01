let r = 0
let g = 0
let b = 0
var x = 300;
var y = 60;
var radius = 60;


function setup() {
  createCanvas(600, 600);
  

}

function draw() {
  background(200);
	// Get the rectangle to change color when the mouse is over it

	// Warm Up
	// if(mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200){
	// 	fill("red")
	// }
	// else {
	// 	fill("white")
	// }

	



	rect(100, 100, 100, 100)


	// text(mouseIsPressed, 20, 20)

	// Challenge #1
	if(mouseIsPressed){
		background(0)
	}


	// Challenge #2
	if(mouseIsPressed){
		r = random(0, 255)
		g = random(0, 255)
		b = random(0, 255)
	}
	fill(r, g, b)
	noStroke()
	ellipse(mouseX, mouseY, 15, 15)

	// Challenge #3:
	if(mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200 && mouseIsPressed){
		r = random(0, 255)
		g = random(0, 255)
		b = random(0, 255)
	}
	
	fill(r, g, b)
	noStroke()
	ellipse(mouseX, mouseY, 15, 15)

	// Challenge 4
	//set the fill to whatever values are held by r, g, and b
    stroke(r, g, b);
    //draw a continuous line
    line(pmouseX, pmouseY, mouseX, mouseY);

    //calculate the distance between the mouse and the center of the ellipse
    d = dist(mouseX, mouseY, x, y);

    //if the mouse is over the circle
    if (d < radius) {
        //turn the fill on for 'mouse over' effect
        stroke(r, g, b);
        fill(0);
        // console.log("over");
    }
    else{ //if it isn't over the circle
      //set the fill to (r,g,b) for 'mouse over' effect
      fill(r, g, b);
    }

    //draw the rectangle button over the mouse trail
    ellipse(x, y, radius, radius);

    if (mouseIsPressed){
        if (d < radius) {
          //set the red, green, and blue variables to a random value
          r = random(0, 255);
          g = random(0, 255);
          b = random(0, 255);
        }
    }








}