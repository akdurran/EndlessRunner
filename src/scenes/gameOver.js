class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    preload() {
    this.load.audio('sfx_explosion', './assets/explosion38.wav');
    this.load.audio('sfx_explosion2', './assets/explosion.wav');
    this.load.audio('sfx_explosion3', './assets/explosion(1).wav');
    this.load.audio('sfx_explosion4', './assets/explosion(2).wav');
    this.load.audio('sfx_explosion5', './assets/explosion(3).wav');
    }
    create() {

      this.soundPlayed = false;

      this.explosionSounds = ['sfx_explosion', 'sfx_explosion2', 'sfx_explosion3', 'sfx_explosion4',
      'sfx_explosion5'];

      

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.sound.stopAll();

        

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '23px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

          let highScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '12px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

          this.add.text(game.config.width / 2, game.config.height / 2, 'PRESS F to retry', menuConfig).setOrigin(0.5);
          this.add.text(game.config.width/2, 20, 'HIGH SCORE: ' + highScore, highScoreConfig);
    }
    update() {
      if(!this.soundPlayed) {
        this.sound.play(this.explosionSounds[Phaser.Math.Between(0, 4)]);
        this.soundPlayed = true;
      }
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            increment = 0;
           this.scene.start('playScene');
          }
    }
}