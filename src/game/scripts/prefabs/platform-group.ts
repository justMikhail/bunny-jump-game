import * as Phaser from 'phaser';
import { TextureKey } from '../const/texture-key';
import PlatformItem from './platform-item';

export default class PlatformGroup extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
  }

  createPlatforms(platformsCount, scaleNumber): void {
    const { width } = this.scene.scale;

    const platforms = this.getFirstDead();

    if (!platforms) {
      for (let i = 0; i < platformsCount; i += 1) {
        const positionX = Phaser.Math.Between(width * 0.5, width * 0.5);
        const positionY = 150 * i;

        const platformItem = PlatformItem
          .generate(this.scene, positionX, positionY, TextureKey.BasicPlatform)
          .setScale(scaleNumber);

        this.add(platformItem);
      }
    } else {
      console.log('reset platforms');
    }
  }
}
