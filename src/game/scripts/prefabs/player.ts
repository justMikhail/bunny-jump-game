import { Unit } from './unit';
import { FrameKey } from '../const/frame-key';

export default class Player extends Unit {
  private currentSkinTexture;
  private keyW: Phaser.Input.Keyboard.Key;
  private keyA: Phaser.Input.Keyboard.Key;
  private keyS: Phaser.Input.Keyboard.Key;
  private keyD: Phaser.Input.Keyboard.Key;
  private basicSpeed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, skinTexture: string, frame?: string) {
    super(scene, x, y, skinTexture, frame);

    this.currentSkinTexture = skinTexture;
    this.scene.events.on('update', this.update, this);
    this.basicSpeed = 300;

    // KEYS
    this.keyW = this.scene.input.keyboard.addKey('W');
    this.keyA = this.scene.input.keyboard.addKey('A');
    this.keyS = this.scene.input.keyboard.addKey('S');
    this.keyD = this.scene.input.keyboard.addKey('D');

    // PHYSICS
    this.getBody().setSize(this.width, this.height);
    this.getBody().enable = true;
    this.getBody().checkCollision.up = false;
    this.getBody().checkCollision.left = false;
    this.getBody().checkCollision.right = false;

    // ANIMS
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new Player(scene, x, y, texture, frame);
  }

  update() {
    this.addMovement();
  }

  addMovement(): void {
    this.getBody().setVelocityX(0);

    const touchingDown = this.getBody().touching.down;
    if (touchingDown) {
      this.getBody().setVelocityY(-this.basicSpeed * 1.5);
      this.setTexture(this.currentSkinTexture, FrameKey.Player.Jump);
    }

    const vy = this.getBody().velocity.y;
    if (vy > 0) {
      this.setTexture(this.currentSkinTexture, FrameKey.Player.Ready);
    }

    if (this.keyW?.isDown && !touchingDown) {
      this.body.velocity.y = -this.basicSpeed;
    }

    if (this.keyA?.isDown && !touchingDown) {
      this.getBody().velocity.x = -this.basicSpeed;
    } else if (this.keyD?.isDown && !touchingDown) {
      this.getBody().velocity.x = this.basicSpeed;
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        if (event.gamma < -3) {
          this.getBody().setVelocityX(-this.basicSpeed);
        }
        if (event.gamma > 3) {
          this.getBody().setVelocityX(this.basicSpeed);
        }
      }, true);
    }
  }
}
