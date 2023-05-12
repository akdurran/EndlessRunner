class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    create() {

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        let menuConfig = {
            fontFamily: 'Calibri',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }
          this.add.text(game.config.width / 2, game.config.height / 2, 'PRESS <- to retry', menuConfig).setOrigin(0.5);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
           this.scene.start('playScene');
          }
    }
}