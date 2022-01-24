import { Unit } from './unit';

export default class Player extends Unit {
  private keyW: Phaser.Input.Keyboard.Key;

  private keyA: Phaser.Input.Keyboard.Key;

  private keyS: Phaser.Input.Keyboard.Key;

  private keyD: Phaser.Input.Keyboard.Key;

  constructor(scene: Phaser.Scene, x: number, y: number, skinTexture: string, frame?: string) {
    super(scene, x, y, skinTexture, frame);

    // KEYS
    this.keyW = this.scene.input.keyboard.addKey('W');
    this.keyA = this.scene.input.keyboard.addKey('A');
    this.keyS = this.scene.input.keyboard.addKey('S');
    this.keyD = this.scene.input.keyboard.addKey('D');

    // PHYSICS
    this.getBody().setSize(100, 100);
    this.getBody().enable = true;
    this.getBody().checkCollision.up = false;
    this.getBody().checkCollision.left = false;
    this.getBody().checkCollision.right = false;
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new Player(scene, x, y, texture, frame);
  }

  addMovement(): void {
    const speed = 200;
    this.getBody().setVelocity(0);

    if (this.keyW?.isDown) {
      this.body.velocity.y = -speed;
    }

    if (this.keyA?.isDown) {
      this.body.velocity.x = -speed;
    }

    if (this.keyS?.isDown) {
      this.body.velocity.y = speed;
    }

    if (this.keyD?.isDown) {
      this.body.velocity.x = speed;
    }
  }
}
