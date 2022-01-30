import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';

import { TextureKey } from '../const/texture-key';
import { store, mainMenuSceneSlice } from '../store/store';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.Start });
  }

  create(): void {
    console.log('main-menu-scene');
    this.createBackground();
    // this.scene.start(SceneKeys.Level1);

    this.initUI();
  }

  static update(): void {
  }

  initUI() {
    store.subscribe(() => {
      console.log('init');
    console.log(store.getState())
    });

    console.log(store.subscribe);

    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', () => {
      // this.scene.start(SceneKeys.Level1);
      store.dispatch(mainMenuSceneSlice.actions.playGame());
    });
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.add
      .image(width * 0.5, height * 0.5, TextureKey.StartMenuBg)
      .setDisplaySize(width, height);
  }
}
