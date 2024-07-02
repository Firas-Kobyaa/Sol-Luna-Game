

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        // Background imports
        this.load.image('map','images/backgrounds/space.png')

        // Main characters
        this.load.image('watergirl', 'images/main-characters/watergirl.png');
        this.load.image('robot', 'images/main-characters/robot.png');

    
        
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

        //icon imports
        this.load.image('obstacle-mars', 'images/icons/mars.png');
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
        this.load.image('waterBase1', 'images/icons/waterBase1.png');
        this.load.image('waterBase5', 'images/icons/waterBase5.png');
        this.load.image('waterBase7', 'images/icons/waterBase7.png');
        this.load.image('waterBase', 'images/icons/waterBase.png');

        //obstacle imports
        this.load.image('fire-obst','images/obstacles/fire-obst.png');
        this.load.image('water-obst','images/obstacles/water-obst.png');
        this.load.image('road2-obst','images/obstacles/road2-obst.png');
        this.load.image('road3-obst','images/obstacles/road3-obst.png');
        this.load.image('road7-obst','images/obstacles/road7-obst.png');

        //furniture imports
        this.load.image('door','images/obstacles/door.png');
        this.load.image('leftLadder','images/obstacles/leftLadder.png');
        this.load.image('rightLadder','images/obstacles/rightLadder.png');

        




    }




    create (data){

        
        // Set the desired height in pixels
        let map = this.add.image(960,540,'map')

      // Set the desired height in pixels
      map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
      map.displayHeight = this.sys.game.config.height; 

      // Add Watergirl character
      this.watergirlSprite = this.add.sprite(100, 950, 'watergirl'); // Adjust position as needed
      this.watergirlSprite.setScale(0.5); // Adjust scale as needed

      // Enable physics for Watergirl
      this.physics.world.enable(this.watergirlSprite);

      // Add obstacles
      this.obstacles = this.physics.add.group();
      this.obstacles.create(500, 500, 'obstacle-mars'); // Example obstacle position, adjust as needed
      this .obstacles.create(260,1050,'starting-road')
      this .obstacles.create(550,1040,'fire-obst')
      this .obstacles.create(680,1050,'rd-beside-fire')

      // Set collision between Watergirl and obstacles
      this.physics.add.collider(this.watergirlSprite, this.obstacles);

      // Set camera to follow Watergirl
     // this.cameras.main.startFollow(this.watergirlSprite);
       
       


        // increase width and height
        map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
        map.displayHeight = this.sys.game.config.height; 
        
        // function to play the audio file and loop it
          const music = this.sound.add('music');
                music.play({
                    loop: true
                });

           
        
    }












    update (time,data){








    }

}

export default FirstScene