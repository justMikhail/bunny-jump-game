import * as Phaser from 'phaser';

import { SceneRoute } from '../const/project-routes';
import CounterFps from '../prefabs/counter-fps';

import { createMenuButton } from '../ui/button';

export default class StartScene extends Phaser.Scene {
  fpsCounter;

  constructor() {
    super({ key: SceneRoute.Start });
  }

  create() {
    console.log('start-scene');
    this.createInfoForDeveloper();

    const btn = createMenuButton({
      scene: this,
      text: 'Play',
      x: 100,
      y: 200,
    });

    btn.on('pointerdown', () => {
      console.log('play!!!');
      this.scene.start(SceneRoute.Level1);
    });
  }

  update() {
    this.fpsCounter.update();
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
