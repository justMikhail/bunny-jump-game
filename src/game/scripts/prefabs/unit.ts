import { Physics } from 'phaser';

export class Unit extends Physics.Arcade.Sprite {
  protected hp = 100;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    // PHYSICS
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // this.getBody().setCollideWorldBounds(true);
  }

  protected checkFlip(): void {
    if (this.body.velocity.x < 0) {
      this.scaleX = -1;
    } else {
      this.scaleX = 1;
    }
  }

  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }

  protected setAliveStatus(status: boolean) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);
  }
}
