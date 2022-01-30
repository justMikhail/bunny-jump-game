import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';

import { TextureKey } from '../const/texture-key';
import { store } from '../store/store';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('main-menu-scene');
    this.createBackground();

    this.connectToStore();
  }

  static update(): void {
  }

  connectToStore() {
    store.subscribe(() => {
      const mainMenuSceneState = store.getState().commonGameState;

      if (mainMenuSceneState?.isPlaying) {
        this.scene.start(SceneKeys.Level1);
      } else {
        console.log('Остаемся на сцене Меню');
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
