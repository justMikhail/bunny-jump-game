import * as Phaser from 'phaser';

export default class PlatformItem extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
    // Subscription to scene event
    this.scene.events.on('update', this.update, this);
  }

  init(): void {
    this.scene.add.existing(this);
    // this.scene.physics.add.existing(this);
    // this.body.enable = true;
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new PlatformItem(scene, x, y, texture, frame);
  }

  reset() {
    this.setAliveStatus(true);
  }

  protected setAliveStatus(status: boolean) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);
  }
}
