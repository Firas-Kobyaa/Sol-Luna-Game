function waterGirl(){

    function setup() {
        createCanvas(400, 400); // Create a canvas of size 400x400 pixels
      }
      
      function draw() {
        background(220); // Set background color to light gray
      
        // Draw Girl character centered on the canvas
        drawGirl(width / 2, height / 2);
      }
      
      function drawGirl(x, y) {
        // Hair
        fill('brown');
        ellipse(x, y - 30, 50, 70); // Hair shape
      
        // Head
        fill('lightpink');
        ellipse(x, y, 50, 60); // Head shape
      
        // Eyes
        fill('black');
        ellipse(x - 10, y - 5, 10, 15); // Left eye
        ellipse(x + 10, y - 5, 10, 15); // Right eye
      
        // Smile
        noFill();
        stroke(0);
        arc(x, y + 5, 20, 20, 0, PI); // Smile arc
      
        // Body
      
        fill('rgb(128,141,213)');
        rect(x - 20, y + 30, 40, 60, 10); // Body shape
      
        // Left Arm
        fill('rgb(128,141,213)');
        rect(x - 30, y + 30, 10, 40, 5); // Left arm
      
        // Right Arm
        rect(x + 20, y + 30, 10, 40, 5); // Right arm
      
        // Left Leg
        //rect(x - 15, y + 90, 10, 40, 5); // Left leg
      
        // Right Leg
        //rect(x + 5, y + 90, 10, 40, 5); // Right leg
      }
      

}
