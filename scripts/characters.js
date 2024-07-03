// //  //////////    Characters    \\\\\\\\\\\\\\\\

// // //water girl character function
// // const  watergirl = function(){

// //     function setup() {
// //         createCanvas(400, 400); // Create a canvas of size 400x400 pixels
// //         saveCanvas('watergirl', 'png');
// //       }
      
// //       function draw() {
// //         background(220); // Set background color to light gray
      
// //         // Draw Girl character centered on the canvas
// //         drawGirl(width / 2, height / 2);
// //       }
      
// //       function drawGirl(x, y) {
// //         // Hair
// //         fill('brown');
// //         ellipse(x, y - 30, 50, 70); // Hair shape
      
// //         // Head
// //         fill('lightpink');
// //         ellipse(x, y, 50, 60); // Head shape
      
// //         // Eyes
// //         fill('black');
// //         ellipse(x - 10, y - 5, 10, 15); // Left eye
// //         ellipse(x + 10, y - 5, 10, 15); // Right eye
      
// //         // Smile
// //         noFill();
// //         stroke(0);
// //         arc(x, y + 5, 20, 20, 0, PI); // Smile arc
      
// //         // Body
      
// //         fill('rgb(128,141,213)');
// //         rect(x - 20, y + 30, 40, 60, 10); // Body shape
      
// //         // Left Arm
// //         fill('rgb(128,141,213)');
// //         rect(x - 30, y + 30, 10, 40, 5); // Left arm
      
// //         // Right Arm
// //         rect(x + 20, y + 30, 10, 40, 5); // Right arm
      
// //         // Left Leg
// //         rect(x - 15, y + 90, 10, 40, 5); // Left leg
      
// //         // Right Leg
// //         rect(x + 5, y + 90, 10, 40, 5); // Right leg

// //       }
      


// // }



// // // Robot character

// // const robot = function() {

// //   function setup() {
// //    createCanvas(400, 400); // Create a canvas of 400x400 pixels
// //   }

// //   function draw() {
// //    background(220); // Set the background color to light gray

// //    // Draw the triangle on top of the head
// //    fill(255, 0, 0); // Set fill color to red for the triangle (you can change colors as desired)
// //    triangle(200, 30, 180, 50, 220, 50); // Draw a wide, small triangle with vertices at (200, 30), (180, 50), and (220, 50)

// //    // Draw the square face (changed from circle)
// //    fill(255); // Set fill color to white for the square face
// //    rect(150, 50, 100, 100); // Draw a square (face) at (150, 50) with width and height of 100

// //    // Draw the eyes
// //    fill(0); // Set fill color to black for the eyes
// //    ellipse(185, 90, 10, 10); // Draw left eye at (185, 90) with a diameter of 10
// //    ellipse(215, 90, 10, 10); // Draw right eye at (215, 90) with a diameter of 10

// //    // Draw the mouth (changed to a more angled triangle)
// //    fill(0); // Set fill color to black for the mouth
// //    triangle(185, 120, 215, 120, 200, 125); // Draw a triangle (mouth) with vertices at (185, 120), (215, 120), and (200, 125)

// //    // Draw the half-circle face
// //    fill(0); // Set fill color to black for the half-circle face
// //    arc(200, 150, 100, 100, 0, PI, CHORD); // Draw a half-circle (face) at (200, 150) with a diameter of 100

// //    // Draw the body
// //    fill(255); // Set fill color to white
// //    rect(150, 150, 100, 150); // Draw a rectangle (body) at (150, 150) with width 100 and height 150

// //    // Draw the hands
// //    fill(255); // Set fill color to white
// //    rect(110, 180, 30, 80); // Draw left hand (rectangle) at (110, 180) with width 30 and height 80
// //    rect(260, 180, 30, 80); // Draw right hand (rectangle) at (260, 180) with width 30 and height 80

// //    // Draw the legs
// //    fill(255); // Set fill color to white
// //    rect(150, 300, 30, 100); // Draw left leg (rectangle) at (150, 300) with width 30 and height 100
// //    rect(220, 300, 30, 100); // Draw right leg (rectangle) at (220, 300) with width 30 and height 100

// //    // Draw the feet
// //    fill(0); // Set fill color to black
// //    rect(140, 400, 50, 20); // Draw left foot (rectangle) at (140, 400) with width 50 and height 20
// //    rect(210, 400, 50, 20); // Draw right foot (rectangle) at (210, 400) with width 50 and height 20
// //   }

// // };

// // console.log('bkrahkon')
// // 
// // const rambo = function(){
// //   function setup() {
// //       createCanvas(400, 500);
//    // }
// //     
// //     function draw() {
//       // background(220);
// //       
// //       noStroke()
// //       rect(230,50,20,10)
// //       fill('#E8BEAC')
// //       //head
// //       square(150,50,100)
// //       //neck
// //       rect(190,150,20,5)
// //       fill('blue')
// //       //body
// //       square(125,155,150)
// //       //left hand
// //       rect(120,170,5,30)
// //       rect(90,170,30,30)
// //       fill('#E8BEAC')
// //       rect(90,200,30,80)
// //       //right hand
// //       fill('blue')
// //       rect(275,170,5,30)
// //       rect(280,170,30,30)
// //       fill('#E8BEAC')
//  //     rect(280,200,30,80)
// //       
// //       fill('black')
// //       //left hair
// //       rect(147,20,5,60)
// //       //base hair
// //       rect(147,10,103,40)
// //       //right hair
// //       rect(250,10,5,70)
// //       // black legs
// //       rect(230,305,30,60)
// //       rect(150,305,30,60)
// //       fill('#E8BEAC')
// //       // legs skin
// //       rect(150,360,30,80)
// //       rect(230,360,30,80)
// //       fill('#fffff')
// //       //right eye
// //       rect(215,80,20,10) 
// //       //left eye
// //       rect(170,80,20,10)
// //       //mouth
//       rect(190,120,20,10)
      
// //       
// //     }
// }
// // 
// // Call the rambo function to generate and save the image
// // 
// // const saro = function(){
// //   function setup() {
// //     createCanvas(400, 400);
//   }
// //   
// //   function draw() {
// //     background(220);
//     fill(255);
// //     
// //     // Main character
//     ellipse(200, 250, 50, 50); // Head
// //     
// //     fill(128, 0, 128);
//     triangle(200, 285, 150, 350, 250, 350); // Body
// //     
// //     line(200, 275, 200, 350); // Body line
// //     line(200, 350, 180, 400); // Left leg
//     line(200, 350, 220, 400); // Right leg
// //     
// //     line(150, 250, 200, 300); // Left arm
//     line(250, 250, 200, 300); // Right arm
// //     
// //     // Eyes
// //     fill(0);
// //     ellipse(190, 240, 5, 5); // Left eye
//     ellipse(210, 240, 5, 5); // Right eye
// //     
// //     // Smile
// //     noFill();
//     arc(200, 250, 20, 20, 0, PI); // Smile
// //     
// //     // Hair
// //     stroke(0); // Hair color
//     strokeWeight(2); // Hair thickness
// //     
// //     // Long hair flowing down
// //     for (let i = 0; i < 10; i++) {
// //       let x1 = 190 - i; // Adjust x position to spread the hair around the head
// //       let y1 = 230 + i * 2; // Adjust y position to make the hair flow down
// //       let x2 = 210 + i; // Adjust x position to spread the hair around the head
// //       let y2 = 230 + i * 2; // Adjust y position to make the hair flow down
// //       line(x1, y1, x1 - 10, y1 + 10); // Hair strands on the left
// //       line(x2, y2, x2 + 10, y2 + 10); // Hair strands on the right
// //     }
//   }
// //   
// }
const robot = function() {

  function setup() {
    createCanvas(40, 80); // Create a canvas of 400x400 pixels
    
    let robotURL = canvas.toDataURL();
    localStorage.setItem('robot', robotURL); 
  
  }
 
   function draw() {
     

    // Draw the triangle on top of the head
    fill("#CC402D"); // Set fill color to red for the triangle (you can change colors as desired)
    triangle(200, 30, 180, 50, 220, 50); // Draw a wide, small triangle with vertices at (200, 30), (180, 50), and (220, 50)
 
    // Draw the square face (changed from circle)
    fill("#2C85B8"); // Set fill color to white for the square face
    rect(150, 50, 100, 100); // Draw a square (face) at (150, 50) with width and height of 100
 
    // Draw the eyes
    fill(0); // Set fill color to black for the eyes
    ellipse(185, 90, 10, 10); // Draw left eye at (185, 90) with a diameter of 10
    ellipse(215, 90, 10, 10); // Draw right eye at (215, 90) with a diameter of 10
 
    // Draw the mouth (changed to a more angled triangle)
    fill(0); // Set fill color to black for the mouth
    triangle(185, 120, 215, 120, 200, 125); // Draw a triangle (mouth) with vertices at (185, 120), (215, 120), and (200, 125)
 
    // Draw the half-circle face
    fill(0); // Set fill color to black for the half-circle face
    arc(200, 150, 100, 100, 0, PI, CHORD); // Draw a half-circle (face) at (200, 150) with a diameter of 100
 
    // Draw the body
    fill("#55C6A9"); // Set fill color to white
    rect(150, 150, 100, 150); // Draw a rectangle (body) at (150, 150) with width 100 and height 150
 
    // Draw the hands
    fill("#2C85B8"); // Set fill color to white
    rect(110, 180, 30, 80); // Draw left hand (rectangle) at (110, 180) with width 30 and height 80
    rect(260, 180, 30, 80); // Draw right hand (rectangle) at (260, 180) with width 30 and height 80
 
    // Draw the legs
    fill("#2C85B8"); // Set fill color to white
    rect(150, 300, 30, 100); // Draw left leg (rectangle) at (150, 300) with width 30 and height 100
    rect(220, 300, 30, 100); // Draw right leg (rectangle) at (220, 300) with width 30 and height 100
 
    // Draw the feet
    fill(0); // Set fill color to black
    rect(140, 400, 50, 20); // Draw left foot (rectangle) at (140, 400) with width 50 and height 20
    rect(210, 400, 50, 20); // Draw right foot (rectangle) at (210, 400) with width 50 and height 20
   }
    window.setup = setup;
    window.draw = draw;
};

robot();
