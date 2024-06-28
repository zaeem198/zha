//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

greencar_width = 100;
greencar_height = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 10;
greencar_y = 10;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(rover_y >=0)
		{
			greencar_y = greencar_y - 10;
			console.log("When up arrow is pressed, x = " + greeencar_x + " / y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
		}
}

function down()
{
	if(rover_y >=500)
		{
			greencar_y = greencar_y + 10;
			console.log("When down arrow is pressed, x = " + greeencar_x + " / y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
		}
}

function left()
{
	if(rover_x >=0)
		{
			greencar_y = greencar_y - 10;
			console.log("When left arrow is pressed, x = " + greeencar_x + " / y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
		}
}

function right()
{
	if(rover_x >=700)
		{
			greencar_y = greencar_y + 10;
			console.log("When up arrow is pressed, x = " + greeencar_x + " / y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
		}
}
