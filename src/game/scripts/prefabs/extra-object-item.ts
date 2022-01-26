import * as Phaser from 'phaser';

export default class ExtraObjectItem extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    this.init();
    this.scene.events.on('update', this.update, this);
  }

  init() {
    this.scene.add.existing(this);
  }

  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new ExtraObjectItem(scene, x, y, texture, frame);
  }
}
