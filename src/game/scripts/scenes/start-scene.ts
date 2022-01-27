import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';
import CounterFps from '../prefabs/counter-fps';

import { DataBase } from '../utils/data-base';
import { TextureKey } from '../const/texture-key';

export default class StartScene extends Phaser.Scene {
  fpsCounter;

  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('start-scene');
    this.createInfoForDeveloper();
    this.createBackground();
    this.scene.start(SceneKeys.Level1);
  }

  update(): void {
    this.fpsCounter.update();
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.add
      .image(width * 0.5, height * 0.5, TextureKey.StartMenuBg)
      .setDisplaySize(width, height);
  }

  createInfoForDeveloper(): void {
    // display FPS
    this.fpsCounter = new CounterFps(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
      })
      .setOrigin(0, 1);
  }
}
