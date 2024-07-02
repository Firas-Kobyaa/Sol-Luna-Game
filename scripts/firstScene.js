

class FirstScene extends Phaser.Scene{
    constructor(){
        super({key: 'firstScene'})
    }

 
    
    preload (){
        this.load.image('map','images/space.png')
        this.load.audio('music', './audio/music.mp3');
    }
    create (data){

        
        // Set the desired height in pixels
        let map = this.add.image(960,540,'map')
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