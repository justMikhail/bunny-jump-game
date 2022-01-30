import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';

import { TextureKey } from '../const/texture-key';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('start-scene');
    this.createBackground();
    // this.scene.start(SceneKeys.Level1);

    this.initUI();
  }

  update(): void {
  }

  initUI() {
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', () => {
      this.scene.start(SceneKeys.Level1);
    });
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.add
      .image(width * 0.5, height * 0.5, TextureKey.StartMenuBg)
      .setDisplaySize(width, height);
  }
}
