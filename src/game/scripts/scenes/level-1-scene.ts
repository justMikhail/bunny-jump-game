import * as Phaser from 'phaser';

import { SceneRoute } from '../const/project-routes';
import { TextureKeys } from '../const/asset-keys';
import CounterFps from '../prefabs/counter-fps';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;

  constructor() {
    super({ key: SceneRoute.Level1 });
  }

  create() {
    console.log('level-1-scene');
    this.createBackground();
    this.createInfoForDeveloper();
    this.createPlatforms();
  }

  update() {
    this.fpsCounter.update();
  }

  createBackground() {
    const { width, height } = this.scale;

    console.log(this.scale)

    this.add
      .image(width * 0.5, height * 0.5, TextureKeys.Lvl1Bg1)
      .setScale(0.4);
    this.add
      .image(width * 0.5, height * 0.5, TextureKeys.Lvl1Bg2)
      .setScale(0.4);
    this.add
      .image(width * 0.5, height * 0.5, TextureKeys.Lvl1Bg3)
      .setScale(0.4);
    this.add
      .image(0, 0, TextureKeys.Lvl1Bg4)
      .setOrigin(0)
      .setDisplaySize(width, height);
    this.add
      .image(width * 0.5, height, TextureKeys.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4);
  }

  createPlatforms() {
    this.add.image(200, 200, TextureKeys.BasicPlatform);
  }

  createInfoForDeveloper() {
    // display FPS
    this.fpsCounter = new CounterFps(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
      })
      .setOrigin(1, 0);
  }
}
