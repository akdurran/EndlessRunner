/*
Areeb Durrani
Vertical Frogger
20 hours
creative tilt technical: I had to learn how scopes work  to get the game timer to work properly, since it needs to be set only once across the whole game
creative tilt visual: I am quite proud of the road sprite. It was rendered in blender from a node based material that I created and applied to a narrow plane.
*/

let config = {
  type: Phaser.AUTO,
  width: 460/2,
  height: 640,
  scene: [Play, GameOver]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keySPACE;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//declare high score
let highScore = 0;

let increment = 0;

let gameTimer = setInterval(function () {
  increment += 1;
}, 1000);