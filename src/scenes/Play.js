

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('road', './assets/road.png');
        this.load.image('car', './assets/car.png');
        this.load.spritesheet('frog', './assets/frog.png', { frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 1 });
    }
    create() {
        this.road = this.add.tileSprite(0, 0, 460 / 2, 640, 'road').setOrigin(0, 0);
        this.frog = new Frog(this, game.config.width / 2, game.config.height - borderUISize - borderPadding, 'frog').setOrigin(0.5, 0);
        this.car = new Car(this, 0, game.config.height, 'car').setOrigin(0,0);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


        //make animations
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('frog', { start: 0, end: 1, first: 0 }),
            frameRate: 15 / 2
        });

        this.frog.anims.play('run');
        this.frog.on('animationcomplete', () => {    // callback after anim completes
            this.frog.anims.play('run');

        });
    } 
    update() {
        this.road.tilePositionY -= 5;
        this.frog.update();
        this.car.update();

        // check collisions
    if (this.checkCollision(this.frog, this.car)) {
        console.log('collision');
        this.frog.reset();
        this.scene.start('gameOverScene');
      }
      
    }

    checkCollision(frog, car) {
        // simple AABB checking
        if (frog.x < car.x + car.width &&
          frog.x + frog.width > car.x &&
          frog.y < car.y + car.height &&
          frog.height + frog.y > car.y) {
          return true;
        } else {
          return false;
        }
      }
}