

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
        // function to play the audio file and loop it
        map.displayWidth = this.sys.game.config.width;; // Set the desired width in pixels
        map.displayHeight = this.sys.game.config.height; 
        
        // func for playing music in the background and looping
          var music = this.sound.add('music');
                music.play({
                    loop: true
                });

            // increase width and height
        
    }
    update (time,data){

    }
}

export default FirstScene