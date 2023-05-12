class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 10;
    }
    update() {
    this.y += this.moveSpeed;
    if(this.y >= game.config.height)
    {
        this.reset();
    }
        
    }
    reset() {
        this.y = -20;
        this.x = Phaser.Math.Between(0 , game.config.width);
    }
}