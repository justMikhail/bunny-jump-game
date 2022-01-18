import * as Phaser from 'phaser';

import { SceneRoute } from '../const/project-routes';
import CounterFps from '../prefabs/counter-fps';

import { createMenuButton } from '../ui/menuButton';
import {DataBase} from '../utils/data-base';
import {SpriteNames} from '../const/asset-keys';

export default class StartScene extends Phaser.Scene {
  fpsCounter;

  constructor() {
    super({ key: SceneRoute.Start });
  }

  create() {
    console.log('start-scene');
    this.createInfoForDeveloper();
    this.createBackground();
    this.createMenuButtons();
  }

  createMenuButtons() {
    const playButton = createMenuButton({
      scene: this,
      text: 'Play',
      x: 100,
      y: 200,
    });

    playButton.on('pointerdown', () => {
      this.scene.start(SceneRoute.Level1);
    });
  }

  update() {
    this.fpsCounter.update();
  }

  createBackground() {
    this.add.sprite(DataBase.ScreenWidth * 0.5, DataBase.ScreenHeight * 0.5, SpriteNames.Level1BgSky);
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
