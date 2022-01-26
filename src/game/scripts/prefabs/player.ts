import { Unit } from './unit';
import { FrameKey } from '../const/frame-key';
import { TextureKey } from '../const/texture-key';

export default class Player extends Unit {
  private keyW: Phaser.Input.Keyboard.Key;
  private keyA: Phaser.Input.Keyboard.Key;
  private keyS: Phaser.Input.Keyboard.Key;
  private keyD: Phaser.Input.Keyboard.Key;
  private basicSpeed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, skinTexture: string, frame?: string) {
    super(scene, x, y, skinTexture, frame);

    this.scene.events.on('update', this.update, this);
    this.basicSpeed = 350;

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
    this.initAnimations();
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
      this.getBody().setVelocityY(-this.basicSpeed);
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
          this.getBody().setVelocityX(this.basicSpeed);
        }
        if (event.gamma > 3) {
          this.getBody().setVelocityX(this.basicSpeed);
        }
        if (event.alpha < -3) {
          this.getBody().setVelocityX(this.basicSpeed);
        }
        if (event.alpha > 3) {
          this.getBody().setVelocityX(this.basicSpeed);
        }
      }, true);
    }
  }

  private initAnimations(): void {
    const generatedWalkFrames = this.scene.anims.generateFrameNames(TextureKey.Player.AlternativeSkin, {
      prefix: 'bunny_2_walk_',
      start: 1,
      end: 2,
    });

    this.scene.anims.create({
      key: FrameKey.Player.AlternativeSkin.Jump,
      frames: generatedWalkFrames,
      frameRate: 8,
    });
  }
}
