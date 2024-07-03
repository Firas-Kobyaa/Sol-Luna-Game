

import FirstScene from "./firstScene.js";

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

document.getElementById('startButton').addEventListener('click', function() {
    // This script will be executed when the button with id 'myButton' is clicked
    console.log('Button was clicked!')

    // Iterate over the NodeList and remove each div
    var divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        div.parentNode.removeChild(div);
    });


    game.scene.start('firstScene')
});











// main.js
// document.getElementById('startButton').addEventListener('click', () => {
//     document.getElementById('startButton').style.display = 'none';
//     document.getElementById('gameContainer').style.display = 'block';

//     // Start the Phaser game (if not already started)
//     if (!game) {
//         game = new Phaser.Game(config);
//         game.scene.add('firstScene',firstScene)
//         game.scene.start('firstScene')
//     }
// });
