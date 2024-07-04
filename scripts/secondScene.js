
class SecondScence extends Phaser.Scene{
    constructor(){
        super({key: 'secondScene'})
    }

 
    
    preload (){

        
        let robotURL = localStorage.getItem('robot');
        console.log('Robot URL:', robotURL);
        // Main characters
        //check if character image is found
        if (robotURL) {
            // Load the image from the data URL
            this.load.image('watergirl', robotURL);
          } else {
            console.error('No image URL found in localStorage');
          }


        // Background imports
        this.load.image('map','images/backgrounds/space.jpg')

       

        //road imports;
        this.load.image('starting-road','images/road/starting-road.png');
        this.load.image('road1','images/road/road1.png');
        this.load.image('road2','images/road/road2.png');
        this.load.image('road3','images/road/road3.png');
        this.load.image('road4','images/road/road4.png');
        this.load.image('road5','images/road/road5.png');
        this.load.image('road6','images/road/road6.png');
        this.load.image('road7','images/road/road7.png');
        this.load.image('rd-beside-fire','images/road/rd-beside-fire.png');
        this.load.image('road-after-fire','images/road/road-after-fire.png');
        this.load.image('road-after-water','images/road/road-after-water.png');

        //audio imports
        this.load.audio('music', './audio/music.mp3');
        this.load.audio('jumpMusic', './audio/jump-music.mp3');
        
        //icon imports
        this.load.image('mars', 'images/icons/mars.png');
        this.load.image('fireBase', 'images/icons/fireBase.png');
        this.load.image('saturn', 'images/icons/saturn.png');
        this.load.image('spaceship', 'images/icons/spaceship.png'); 
        this.load.image('fireRoad1', 'images/icons/fireRoad1.png');
        this.load.image('fireRoad5', 'images/icons/fireRoad5.png');
        this.load.image('fireRoad7', 'images/icons/fireRoad7.png');
        this.load.image('firework1', 'images/icons/firework1.png');
        this.load.image('firework2', 'images/icons/firework2.png');
        this.load.image('heart1', 'images/icons/heart1.png');
        this.load.image('heart2', 'images/icons/heart2.png');
        this.load.image('heart3', 'images/icons/heart3.png');
        this.load.image('rocket', 'images/icons/rocket.png');
        this.load.image('waterRoad1', 'images/icons/waterRoad1.png');
        this.load.image('waterRoad5', 'images/icons/waterRoad5.png');
        this.load.image('waterRoad7', 'images/icons/waterRoad7.png');
        this.load.image('waterBase', 'images/icons/waterBase.png');

        //obstacle imports
        this.load.image('fireobst','images/obstacles/fireobst.png');
        this.load.image('waterobst','images/obstacles/waterobst.png');
        this.load.image('road2obst','images/obstacles/road2obst.png');
        this.load.image('road3obst','images/obstacles/road3obst.png');
        this.load.image('road7obst','images/obstacles/road7obst.png');

        //furniture imports
        this.load.image('door','images/furniture/door.png');
        this.load.image('leftLadder','images/furniture/leftLadder.png');
        this.load.image('rightLadder','images/furniture/rightLadder.png');

        
        // text
        this.load.image('solluna','images/text/sol-luna.png');
        




    }




    create (data){

    

        // Set the desired height in pixels
        let map = this.add.image(960,540,'map')

      // Set the desired height in pixels
      map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
      map.displayHeight = this.sys.game.config.height; 

      // Add Watergirl character
      this.watergirlSprite = this.physics.add.sprite(250, 500, 'watergirl'); // Adjust position as needed
      this.watergirlSprite.setGravityY(300); // Adjust scale as needed



      this.char2 = this.physics.add.sprite(400, 500, 'char2'); // Adjust position as needed
      this.char2.setGravityY(300); // Adjust scale as needed
      this.char2.setDisplaySize(80, 90);
      //  create the starting road
      let start_road = this.physics.add.sprite(260,1047,'starting-road')
      
      // making the starting road unmovable
      start_road.setImmovable();


         //  create the road after fire
        let road_after_fire = this.physics.add.sprite(720,1047,'road-after-fire')
            road_after_fire.setImmovable();

        // create road before water
       
        let road_after_water = this.physics.add.sprite(1450,1047,'road-after-water')
        road_after_water.setImmovable();
        road_after_water.setDisplaySize(1000, 75);

        let road1 = this.physics.add.sprite(400,900,'road1')
        road1.setImmovable();
        road1.setDisplaySize(200, 60);

        let road2 = this.physics.add.sprite(900,750,'road2')
        road2.setImmovable();
        road2.setDisplaySize(500, 60);
        
        let road3 = this.physics.add.sprite(1500,600,'road3')
        road3.setImmovable();
        road3.setDisplaySize(500, 60);

        

        let road4 = this.physics.add.sprite(900,450,'road5')
        road4.setImmovable();
        road4.setDisplaySize(500, 60);

        


        let end_road = this.physics.add.sprite(400,300,'road7');
        end_road.setDisplaySize(800, 60);
        end_road.setImmovable();

        
        let door = this.physics.add.sprite(100,170,'door');
        door.setImmovable();
        door.setDisplaySize(200, 200);

        let road2obst = this.physics.add.sprite(900, 690, 'road2obst');
        road2obst.setDisplaySize(60, 60);
        road2obst.setImmovable();


        
        let road3obst = this.physics.add.sprite(1500, 550, 'road3obst');
        road3obst.setDisplaySize(60, 60);
        road3obst.setImmovable();

        let road7obst = this.physics.add.sprite(600, 230, 'road7obst');
        road7obst.setDisplaySize(60, 60);
        road7obst.setImmovable();


        //obstacles
    
        this.obstacles = this.physics.add.group();
        let obstacle_fire = this.obstacles.create(570, 1050, 'fireobst');
        obstacle_fire.setDisplaySize(100, 120);
        
        let obstacle_water = this.obstacles.create(880, 1050, 'waterobst');
        obstacle_water.setDisplaySize(120, 100);
        
        
        

        // road 7
        let fireobst_1 = this.obstacles.create(350, 250, 'fireRoad1');
        fireobst_1.setDisplaySize(30, 30);

        let waterobst_1 = this.obstacles.create(400, 250, 'waterRoad1');
        waterobst_1.setDisplaySize(30, 30);
        //road 1
        let fireobst_2 = this.obstacles.create(350, 850, 'fireRoad5');
        fireobst_2.setDisplaySize(30, 30);

        let waterobst_2 = this.obstacles.create(400, 850, 'waterRoad5');
        waterobst_2.setDisplaySize(30, 30);

       //road 4
       let fireobst_3 = this.obstacles.create(900, 400, 'fireRoad7');
       fireobst_3.setDisplaySize(30, 30);

       let waterobst_3 = this.obstacles.create(950, 400, 'waterRoad7');
       waterobst_3.setDisplaySize(30, 30);
        //icons 

        let spaceship = this.obstacles.create(1700, 900, 'spaceship');
        spaceship.setDisplaySize(80, 80);

        
        
        
        let saturn = this.obstacles.create(200, 700, 'saturn');
        saturn.setDisplaySize(70, 70);
        
        
        let rocket = this.obstacles.create(1600, 80, 'rocket');
         rocket.setDisplaySize(120, 100);

        let mars = this.obstacles.create(1350, 400, 'mars');
        mars.setDisplaySize(70, 70);

        
        let firework1 = this.obstacles.create(800, 80, 'firework1');
        firework1.setDisplaySize(50, 50);

        let firework2 = this.obstacles.create(1200, 100, 'firework2');
        firework2.setDisplaySize(55, 55);


        
        
        
        let solluna = this.obstacles.create(1000, 50, 'solluna');
        solluna.setDisplaySize(300, 50);
        
        

        
       
        // let heart1=this.obstacles.create(500, 118, 'heart1');      
        // heart1.setDisplaySize(120, 100);
        // let heart2=this.obstacles.create(800, 118, 'heart2');      
        // heart2.setDisplaySize(120, 100);
        // let heart3=this.obstacles.create(500, 118, 'heart3');      
        // heart3.setDisplaySize(120, 100);




        
         








        


        
        

      // fix all obstacles to nonmovablee

      


      // Set collision between Watergirl and starting road
      this.physics.add.collider(this.watergirlSprite,start_road)
      this.physics.add.collider(this.watergirlSprite,road_after_fire)
      this.physics.add.collider(this.watergirlSprite,road_after_water)
      this.physics.add.collider(this.watergirlSprite,road1)
      this.physics.add.collider(this.watergirlSprite,road2)
      this.physics.add.collider(this.watergirlSprite,road3)
      this.physics.add.collider(this.watergirlSprite,road4)
      this.physics.add.collider(this.watergirlSprite,end_road)
      this.physics.add.collider(this.watergirlSprite,road2obst)
      this.physics.add.collider(this.watergirlSprite,road3obst)
      this.physics.add.collider(this.watergirlSprite,road7obst)

      // collidere handeling
      const   points = this.sound.add('points');




      this.physics.add.collider(this.watergirlSprite, obstacle_water, this.handleCollision, null, this);
      this.physics.add.collider(this.watergirlSprite, obstacle_fire, this.handleCollision, null, this);
      this.physics.add.collider(this.watergirlSprite, road2obst, this.handleCollision, null, this);
      this.physics.add.collider(this.watergirlSprite, road3obst, this.handleCollision, null, this);
      this.physics.add.collider(this.watergirlSprite, road7obst, this.handleCollision, null, this);
      this.physics.add.collider(this.watergirlSprite, fireobst_1, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, waterobst_1, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, fireobst_2, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, waterobst_2, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, fireobst_3, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, waterobst_3, this.removeObstacle, null, this);
      this.physics.add.collider(this.watergirlSprite, door, this.endGame, null, this);

       // Set collision between char2 and starting road
       this.physics.add.collider(this.char2,start_road)
       this.physics.add.collider(this.char2,road_after_fire)
       this.physics.add.collider(this.char2,road_after_water)
       this.physics.add.collider(this.char2,road1)
       this.physics.add.collider(this.char2,road2)
       this.physics.add.collider(this.char2,road3)
       this.physics.add.collider(this.char2,road4)
       this.physics.add.collider(this.char2,end_road)

        // collidere handeling

      this.physics.add.collider(this.char2, obstacle_water, this.handleCollision, null, this);
      this.physics.add.collider(this.char2, obstacle_fire, this.handleCollision, null, this);
      this.physics.add.collider(this.char2, road2obst, this.handleCollision, null, this);
      this.physics.add.collider(this.char2, road3obst, this.handleCollision, null, this);
      this.physics.add.collider(this.char2, road7obst, this.handleCollision, null, this);
      this.physics.add.collider(this.char2, fireobst_1, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, waterobst_1, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, fireobst_2, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, waterobst_2, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, fireobst_3, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, waterobst_3, this.removeObstacle, null, this);
      this.physics.add.collider(this.char2, door, this.endGame, null, this);
        
    

      
       // creates and returns an object containing properties 
      // representing the state of the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
    
       // listen for a keydown event specifically for the 'UP' arrow key 
       this.input.keyboard.on('keydown-UP',this.jump,this)

       this.input.keyboard.on('keydown-W', this.jumpChar2, this);
       this.input.keyboard.on('keydown-A', this.moveLeftChar2, this);
       this.input.keyboard.on('keydown-D', this.moveRightChar2, this);

       
    
        
        // function to play the audio file and loop it
         

           
        
    }












    update (time,data){

        const speed = 300;

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.watergirlSprite.setVelocityX(-speed); // Move left
        } else if (this.cursors.right.isDown) {
            this.watergirlSprite.setVelocityX(speed); // Move right
        } else {
            this.watergirlSprite.setVelocityX(0); // Stop horizontal movement
        }
        if (this.input.keyboard.addKey('A').isDown) {
            this.char2.setVelocityX(-speed); // Move left
        } else if (this.input.keyboard.addKey('D').isDown) {
            this.char2.setVelocityX(speed); // Move right
        } else {
            this.char2.setVelocityX(0); // Stop horizontal movement
        }
        
   
    }

    jump() {
        const jumpHeight = -300; // Adjust jump height as needed
        const jumpMusic = this.sound.add('jumpMusic');
        jumpMusic.play();
        // Vertical movement (jumping)
        if (this.watergirlSprite.body.onFloor()) { // Check if on the ground
            this.watergirlSprite.setVelocityY(jumpHeight); // Jump velocity
        }
    }

    handleCollision() {
        // Handle collision logic here
        // Restart the scene when Watergirl collides with obstacle_fire
        
        this.scene.restart();
    }
    removeObstacle(watergirlSprite, obstacle) {
        //obstacle.disableBody(true, true); // Disable and hide the obstacle
        // Optionally, you can destroy the obstacle instead of just disabling it
        obstacle.destroy();
    }


    jumpChar2() {
        const jumpHeight = -300; // Adjust jump height as needed
        
        // Vertical movement (jumping) for Alien
        if (this.char2.body.onFloor()) { // Check if on the ground
            this.char2.setVelocityY(jumpHeight); // Jump velocity
        }
    }
    
    moveLeftChar2() {
        const speed = 300;
        this.char2.setVelocityX(-speed); // Move left
    }

    moveRightChar2() {
        const speed = 300;
        this.char2.setVelocityX(speed); // Move right
    }
    endGame(){
        this.handleCollision()
    }


//game over logic:

// let player = watergirlSprite;
// let fires;
// let gameOver = false;
// if (gameOver) {
//     return;
// }

// const cursors = this.input.keyboard.createCursorKeys();

// if (cursors.left.isDown) {
//     player.setVelocityX(-160);
//     player.anims.play('left', true);
// } else if (cursors.right.isDown) {
//     player.setVelocityX(160);
//     player.anims.play('right', true);
// } else {
//     player.setVelocityX(0);
//     player.anims.play('turn');
// }

// if (cursors.up.isDown && player.body.touching.down) {
//     player.setVelocityY(-330);
// }
// }

// function hitFire(player, fire) {
// this.physics.pause();

// player.setTint(0xff0000);
// player.anims.play('turn');

// player.setVelocityY(300);  // make the player fall down

// gameOver = true;

// this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
// }

// Function to quit the game
// function quitGame() {
//     // Remove the game canvas
//     game.destroy(true);

//  }

//  document.getElementsByClassName('quitButton').addEventListener('click', quitGame());



    

}

export default SecondScence