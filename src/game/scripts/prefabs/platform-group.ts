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
    const firstPlatform = PlatformItem
      .generate(this.scene, this.scene.scale.width * 0.5, (this.scene.scale.height - 250), TextureKey.BrokenPlatform)
      .setScale(scaleNumber);

    this.add(firstPlatform);
  }

  createPlatforms(platformsCount, scaleNumber): void {
    const { width } = this.scene.scale;

    for (let i = 0; i < platformsCount; i += 1) {
      const positionX = Phaser.Math.Between(0, width);
      const positionY = 120 * i;

      const platformItem = PlatformItem
        .generate(this.scene, positionX, positionY, TextureKey.BasicPlatform)
        .setScale(scaleNumber);

      this.add(platformItem);
    }
  }

  update() {
    this.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
      const platform = child;

      const { scrollY } = this.scene.cameras.main;

      if (platform.y >= scrollY + this.scene.scale.height) {
        platform.y = scrollY - Phaser.Math.Between(50, 100);
      }

      platform.body.updateFromGameObject();
    });
  }
}
