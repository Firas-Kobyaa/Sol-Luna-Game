

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        this.load.image('map','assets/space.png')
        this.load.image('left-border','assets/left-rectangle-border.png')
    }
    create (data){

        

        let map = this.add.image(960,540,'map')
      // Set the desired height in pixels
      map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
      map.displayHeight = this.sys.game.config.height; 
       
        this.physics.world.setBounds(0, 0, map.displayWidth, map.displayHeight);

         // Create obstacles group
         this.obstacles = this.physics.add.group();

        let left_border = this.obstacles.create(300,500,'left-border')

        // increase width and height
        left_border.setScale(2)
    }
    update (time,data){

    }
}

export default FirstScene