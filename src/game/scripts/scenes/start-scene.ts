import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';

import { TextureKey } from '../const/texture-key';

export default class StartScene extends Phaser.Scene {

  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('start-scene');
    this.createBackground();
    // this.scene.start(SceneKeys.Level1);
  }

  update(): void {
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.add
      .image(width * 0.5, height * 0.5, TextureKey.StartMenuBg)
      .setDisplaySize(width, height);
  }
}
