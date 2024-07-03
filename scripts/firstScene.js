
// class FirstScene extends Phaser.Scene{
//     constructor(){
//         super({key: 'firstScene'})
//     }

 
    
//     preload (){

        
//         let robotURL = localStorage.getItem('robot');
//         console.log('Robot URL:', robotURL);
//         // Main characters
//         //check if character image is found
//         if (robotURL) {
//             // Load the image from the data URL
//             this.load.image('watergirl', robotURL);
//           } else {
//             console.error('No image URL found in localStorage');
//           }


//         // Background imports
//         this.load.image('map','images/backgrounds/space.png')

       

//         //road imports;
//         this.load.image('starting-road','images/road/starting-road.png');
//         this.load.image('road1','images/road/road1.png');
//         this.load.image('road2','images/road/road2.png');
//         this.load.image('road3','images/road/road3.png');
//         this.load.image('road4','images/road/road4.png');
//         this.load.image('road5','images/road/road5.png');
//         this.load.image('road6','images/road/road6.png');
//         this.load.image('road7','images/road/road7.png');
//         this.load.image('rd-beside-fire','images/road/rd-beside-fire.png');
//         this.load.image('road-after-fire','images/road/road-after-fire.png');
//         this.load.image('road-after-water','images/road/road-after-water.png');

//         //audio imports
//         this.load.audio('music', './audio/music.mp3');
        
//         //icon imports
//         this.load.image('mars', 'images/icons/mars.png');
//         this.load.image('fireBase', 'images/icons/fireBase.png');
//         this.load.image('saturn', 'images/icons/saturn.png');
//         this.load.image('spaceship', 'images/icons/spaceship.png'); 
//         this.load.image('fireRoad1', 'images/icons/fireRoad1.png');
//         this.load.image('fireRoad5', 'images/icons/fireRoad5.png');
//         this.load.image('fireRoad7', 'images/icons/fireRoad7.png');
//         this.load.image('firework1', 'images/icons/firework1.png');
//         this.load.image('firework2', 'images/icons/firework2.png');
//         this.load.image('heart1', 'images/icons/heart1.png');
//         this.load.image('heart2', 'images/icons/heart2.png');
//         this.load.image('heart3', 'images/icons/heart3.png');
//         this.load.image('rocket', 'images/icons/rocket.png');
//         this.load.image('waterBase1', 'images/icons/waterBase1.png');
//         this.load.image('waterBase5', 'images/icons/waterBase5.png');
//         this.load.image('waterBase7', 'images/icons/waterBase7.png');
//         this.load.image('waterBase', 'images/icons/waterBase.png');

//         //obstacle imports
//         this.load.image('fireobst','images/obstacles/fireobst.png');
//         this.load.image('waterobst','images/obstacles/waterobst.png');
//         this.load.image('road2obst','images/obstacles/road2obst.png');
//         this.load.image('road3obst','images/obstacles/road3obst.png');
//         this.load.image('road7obst','images/obstacles/road7obst.png');

//         //furniture imports
//         this.load.image('door','images/furniture/door.png');
//         this.load.image('leftLadder','images/furniture/leftLadder.png');
//         this.load.image('rightLadder','images/furniture/rightLadder.png');

        




//     }




//     create (data){

    

//         // Set the desired height in pixels
//         let map = this.add.image(960,540,'map')

//       // Set the desired height in pixels
//       map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
//       map.displayHeight = this.sys.game.config.height; 

//       // Add Watergirl character
//       this.watergirlSprite = this.physics.add.sprite(250, 500, 'watergirl'); // Adjust position as needed
//       this.watergirlSprite.setGravityY(300); // Adjust scale as needed

//       //  create the starting road
//       let start_road = this.physics.add.sprite(260,1047,'starting-road')
      
//       // making the starting road unmovable
//       start_road.setImmovable();


//          //  create the road after fire
//         let road_after_fire = this.physics.add.sprite(720,1047,'road-after-fire')
//             road_after_fire.setImmovable();

//         // create road before water
       
//         let road_after_water = this.physics.add.sprite(1450,1047,'road-after-water')
//         road_after_water.setImmovable();
//         road_after_water.setDisplaySize(1000, 75);

//         let road1 = this.physics.add.sprite(1700,900,'road1')
//         road1.setImmovable();
//         road1.setDisplaySize(500, 60);

//         let road2 = this.physics.add.sprite(1200,750,'road2')
//         road2.setImmovable();
//         road2.setDisplaySize(500, 60);
        
//         let road3 = this.physics.add.sprite(900,600,'road3')
//         road3.setImmovable();
//         road3.setDisplaySize(500, 60);

        

//         let road4 = this.physics.add.sprite(350,450,'road5')
//         road4.setImmovable();
//         road4.setDisplaySize(500, 60);

        


//         let end_road = this.physics.add.sprite(1300,300,'road7');
//         end_road.setDisplaySize(1500, 60);
//         end_road.setImmovable();

        
//         let door = this.physics.add.sprite(1840,160,'door');
//         door.setImmovable();
//         door.setDisplaySize(200, 200);


//         //obstacles
    
//         this.obstacles = this.physics.add.group();
//         let obstacle_fire = this.obstacles.create(570, 1050, 'fireobst');
//         obstacle_fire.setDisplaySize(100, 120);
        
//         let obstacle_water = this.obstacles.create(880, 1050, 'waterobst');
//         obstacle_water.setDisplaySize(120, 100);
        
//         let road2obst = this.obstacles.create(1300, 700, 'road2obst');
//         road2obst.setDisplaySize(60, 60);

//         let road3obst = this.obstacles.create(900, 550, 'road3obst');
//         road3obst.setDisplaySize(60, 60);

//         let road7obst = this.obstacles.create(1300, 230, 'road7obst');
//         road7obst.setDisplaySize(60, 60);
//         // road 7
//         let fireobst_1 = this.obstacles.create(850, 250, 'fireobst');
//         fireobst_1.setDisplaySize(30, 30);

//         let waterobst_1 = this.obstacles.create(900, 250, 'waterobst');
//         waterobst_1.setDisplaySize(30, 30);
//         //road 1
//         let fireobst_2 = this.obstacles.create(1750, 850, 'fireobst');
//         fireobst_2.setDisplaySize(30, 30);

//         let waterobst_2 = this.obstacles.create(1800, 850, 'waterobst');
//         waterobst_2.setDisplaySize(30, 30);

//        //road 4
//        let fireobst_3 = this.obstacles.create(300, 400, 'fireobst');
//        fireobst_3.setDisplaySize(30, 30);

//        let waterobst_3 = this.obstacles.create(350, 400, 'waterobst');
//        waterobst_3.setDisplaySize(30, 30);
//         //icons 

//         let spaceship = this.obstacles.create(1700, 500, 'spaceship');
//         spaceship.setDisplaySize(80, 80);

        
        
        
//         let saturn = this.obstacles.create(200, 700, 'saturn');
//         saturn.setDisplaySize(70, 70);
        
        
//         let rocket = this.obstacles.create(200, 80, 'rocket');
//          rocket.setDisplaySize(120, 100);

//         let mars = this.obstacles.create(1350, 400, 'mars');
//         mars.setDisplaySize(70, 70);

        
//         let firework1 = this.obstacles.create(800, 80, 'firework1');
//         firework1.setDisplaySize(50, 50);

//         let firework2 = this.obstacles.create(500, 100, 'firework2');
//         firework2.setDisplaySize(55, 55);


//         let leftLadder = this.obstacles.create(643, 503, 'leftLadder');
//         leftLadder.setDisplaySize(150, 150);

//         let rightLadder = this.obstacles.create(1175, 670, 'rightLadder');
//         rightLadder.setDisplaySize(130, 130);
        
        

        
        

        
       
//         // let heart1=this.obstacles.create(500, 118, 'heart1');      
//         // heart1.setDisplaySize(120, 100);
//         // let heart2=this.obstacles.create(800, 118, 'heart2');      
//         // heart2.setDisplaySize(120, 100);
//         // let heart3=this.obstacles.create(500, 118, 'heart3');      
//         // heart3.setDisplaySize(120, 100);




        
         








        


        
        

//       // fix all obstacles to nonmovable
      

      


//       // Set collision between Watergirl and starting road
//       this.physics.add.collider(this.watergirlSprite,start_road)
//       this.physics.add.collider(this.watergirlSprite,road_after_fire)
//       this.physics.add.collider(this.watergirlSprite,road_after_water)
//       this.physics.add.collider(this.watergirlSprite,road1)
//       this.physics.add.collider(this.watergirlSprite,road2)
//       this.physics.add.collider(this.watergirlSprite,road3)
//       this.physics.add.collider(this.watergirlSprite,road4)
//       this.physics.add.collider(this.watergirlSprite,end_road)

      
//       // creates and returns an object containing properties 
//       // representing the state of the arrow keys
//       this.cursors = this.input.keyboard.createCursorKeys();
    
//        // listen for a keydown event specifically for the 'UP' arrow key 
//        this.input.keyboard.on('keydown-UP',this.jump,this)


       
    
        
//         // function to play the audio file and loop it
//           const music = this.sound.add('music');
//                 music.play({
//                     loop: true
//                 });

           
        
//     }












//     update (time,data){

//         const speed = 200;

//         // Horizontal movement
//         if (this.cursors.left.isDown) {
//             this.watergirlSprite.setVelocityX(-speed); // Move left
//         } else if (this.cursors.right.isDown) {
//             this.watergirlSprite.setVelocityX(speed); // Move right
//         } else {
//             this.watergirlSprite.setVelocityX(0); // Stop horizontal movement
//         }
//     }

//     jump() {
//         const jumpHeight = -300; // Adjust jump height as needed

//         // Vertical movement (jumping)
//         if (this.watergirlSprite.body.onFloor()) { // Check if on the ground
//             this.watergirlSprite.setVelocityY(jumpHeight); // Jump velocity
//         }
//     }






    

// }

 export default FirstScene







//####################################################


