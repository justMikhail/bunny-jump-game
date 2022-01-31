import * as Phaser from 'phaser';

import { store } from '../store/store';

import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('main-menu-scene');
    this.connectToStore();
    this.createBackground();
  }

  static update(): void {
  }

  connectToStore() {
    store.subscribe(() => {
      const mainMenuSceneState = store.getState().commonGameData;

      if (mainMenuSceneState?.isPlaying) {
        this.scene.start(SceneKeys.Level1);
      } else {
        console.log('Ставим игру на паузу');
      }
    });
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.add
      .image(width * 0.5, height * 0.5, TextureKey.StartMenuBg)
      .setDisplaySize(width, height);
  }
}
