

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        // Background imports
        this.load.image('map','images/backgrounds/space.png')

        // Main characters
        this.load.image('watergirl', 'images/main-characters/watergirl.png');
        
        
        //road imports;
        this.load.image('starting-road','images/road/starting-road.png');
        this.load.image('rd-beside-fire','images/road/rd-beside-fire.png');

        //audio imports
        this.load.audio('music', './audio/music.mp3');

        //icon imports
        this.load.image('obstacle-mars', 'images/icons/mars.png');

        //obstacle imports
        this.load.image('fire','images/obstacles/fire-obst.png');






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
      this .obstacles.create(550,1040,'fire')
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