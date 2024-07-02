

import FirstScene from "./scripts/firstScene.js";

const firstScene = new FirstScene()
// game Scene
let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: '#ffffff',
    
    physics :{
        default:'arcade',
        arcade :{
            debug : true
        },
    },
    
    // fit to screen size 
    scale: {
        mode: Phaser.Scale.FIT,
        // center to the center of the screen
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
   
}
const game = new Phaser.Game(config);
console.log(game)
game.scene.add('firstScene',firstScene)


// start this scene
game.scene.start('firstScene')

