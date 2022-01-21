import * as Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    super(scene, x, y, texture, frame);

    this.init();
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.body.checkCollision.up = false;
    this.body.checkCollision.left = false;
    this.body.checkCollision.right = false;
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new Player(scene, x, y, texture, frame);
  }

  addMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    const speed = 300;

    this.setVelocity(0); // todo

    if (cursors.left.isDown) {
      this.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      this.setVelocityX(speed);
    }

    if (cursors.up.isDown) {
      this.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      this.setVelocityY(speed);
    }
  }
}
