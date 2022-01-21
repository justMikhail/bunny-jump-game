import * as Phaser from 'phaser';
import Platform from './platform-item';
import { TextureKey } from '../const/texture-key';

export default class PlatformGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);

    this.scene = scene;
  }

  createPlatforms() {
    const platformItem = Platform.generate(this.scene, 250, 500, TextureKey.BasicPlatform).setScale(0.4);
    this.add(platformItem);

    const platformsCount = 5;
    const { width } = this.scene.scale;

    for (let i = 0; i < platformsCount; i += 1) {
      const x = Phaser.Math.Between(width * 0.5, width * 0.5);
      const y = 200 * i;

      const platform = new Platform(this.scene, x, y, TextureKey.BasicPlatform).setScale(0.4);

      // const { body } = platform;
      // body.updateFromGameObject();
    }
  }
}
