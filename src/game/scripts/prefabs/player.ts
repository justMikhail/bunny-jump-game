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
    this.initAnimations();
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new Player(scene, x, y, texture, frame);
  }

  update() {
    this.addMovement();
    const touchingDown = this.getBody().touching.down;
    if (touchingDown) {
      this.getBody().setVelocityY(-this.basicSpeed);
    }
  }

  addMovement(): void {
    // this.getBody().setVelocity(0);

    if (this.keyW?.isDown) {
      this.body.velocity.y = -this.basicSpeed;
    }

    if (this.keyA?.isDown) {
      this.body.velocity.x = -this.basicSpeed;
    }

    if (this.keyS?.isDown) {
      this.body.velocity.y = this.basicSpeed;
    }

    if (this.keyD?.isDown) {
      this.body.velocity.x = this.basicSpeed;
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
