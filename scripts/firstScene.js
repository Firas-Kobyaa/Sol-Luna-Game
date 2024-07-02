

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        //loading files needed
        this.load.image('map','images/space.png')
        
    }
    create (data){

        
        // Set the desired height in pixels
        let map = this.add.image(960,540,'map')
      // Set the desired height in pixels
      map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
      map.displayHeight = this.sys.game.config.height; 
       
       

        // increase width and height
        
    }
    update (time,data){

    }
}

export default FirstScene