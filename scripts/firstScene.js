

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        //loading files needed
        this.load.image('map','images/space.png')

        // Load images (replace with your actual image paths)
        this.load.image('watergirl', 'images/watergirl.png');
        this.load.image('obstacle-mars', 'images/obstacle-mars.png');
        this.load.image('starting-road','images/starting-road.png')
        this.load.image('fire','images/fire.png')
        this.load.image('rd-beside-fire','images/rd-beside-fire.png')
        

        this.load.audio('music', './audio/music.mp3');

    }
    create (data){

        
        // Set the desired height in pixels
        let map = this.add.image(960,540,'map')

      // Set the desired height in pixels
      map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
      map.displayHeight = this.sys.game.config.height; 
      
      this.watergirl = this.physics.add.sprite(500,400,'watergirl')
      this.watergirl.setGravityY(300);

      let start_road = this.physics.add.sprite(500,1047,'starting-road')

      start_road.setImmovable();

      this.physics.add.collider(this.watergirl,start_road)

      this.cursors = this.input.keyboard.createCursorKeys();
      
      this.input.keyboard.on('keydown-UP',this.jump,this)

      // Add Watergirl character
    
        
    }
    update(time, data) {

        const speed = 200;

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.watergirl.setVelocityX(-speed); // Move left
        } else if (this.cursors.right.isDown) {
            this.watergirl.setVelocityX(speed); // Move right
        } else {
            this.watergirl.setVelocityX(0); // Stop horizontal movement
        }
    }

    jump() {
        const jumpHeight = -500; // Adjust jump height as needed

        // Vertical movement (jumping)
        if (this.watergirl.body.onFloor()) { // Check if on the ground
            this.watergirl.setVelocityY(jumpHeight); // Jump velocity
        }
    }
       
       
    }
    
       
    

        

    


export default FirstScene