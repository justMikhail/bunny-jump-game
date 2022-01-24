import * as Phaser from 'phaser';
import { TextureKey } from '../const/texture-key';
import PlatformItem from './platform-item';

export default class PlatformGroup extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;

    this.scene.events.on('update', this.update, this);
  }

  createFirstPlatform(scaleNumber) {
    PlatformItem
      .generate(this.scene, this.scene.scale.width * 0.5, (this.scene.scale.height - 150), TextureKey.BrokenPlatform)
      .setScale(scaleNumber);
  }

  createPlatforms(platformsCount, scaleNumber): void {
    const { width } = this.scene.scale;

    const platforms = this.getFirstDead();

    if (!platforms) {
      for (let i = 0; i < platformsCount; i += 1) {
        const positionX = Phaser.Math.Between(0, width);
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

  update() {
    this.children.iterate((child) => {
      const platform = child;

      const { scrollY } = this.scene.cameras.main;

      if (platform.y >= scrollY + this.scene.scale.height) {
        platform.y = scrollY - Phaser.Math.Between(150, 150);
      }
    });
  }
}
