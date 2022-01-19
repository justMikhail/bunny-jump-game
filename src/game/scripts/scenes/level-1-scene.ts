import * as Phaser from 'phaser';

import { DataBase } from '../utils/data-base';
import { SceneRoute } from '../const/project-routes';
import { SpriteName } from '../const/asset-keys';
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
  }

  update() {
    this.fpsCounter.update();
  }

  createBackground() {
    this.add
      .sprite(DataBase.DefaultScreenWidth * 0.5, DataBase.DefaultScreenHeight * 0.5, SpriteName.Lvl1Bg1);
    this.add
      .sprite(DataBase.DefaultScreenWidth * 0.5, DataBase.DefaultScreenHeight * 0.5, SpriteName.Lvl1Bg2);
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
