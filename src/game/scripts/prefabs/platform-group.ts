import * as Phaser from 'phaser';
import Platform from './platform-item';
import { TextureKey } from '../const/texture-key';

export default class PlatformGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
  }

  createPlatforms(platformsCount): void {
    const { width } = this.scene.scale;

    for (let i = 0; i < platformsCount; i += 1) {
      const positionX = Phaser.Math.Between(width * 0.5, width * 0.5);
      const positionY = 150 * i;

      const platformItem = Platform
        .generate(this.scene, positionX, positionY, TextureKey.BasicPlatform)
        .setScale(0.4);

      this.add(platformItem);
    }
  }
}
