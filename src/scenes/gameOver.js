class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    create() {

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
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            increment = 0;
           this.scene.start('playScene');
          }
    }
}