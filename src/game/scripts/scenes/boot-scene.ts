import 'phaser';

// utils
import { SceneRoute } from '../const/project-routes';
import { SpriteNames } from '../const/asset-keys';

// Prefabs
import CounterFps from '../prefabs/counter-fps';

export default class BootScene extends Phaser.Scene {
  fpsCounter;

  preload() {
    this.load.image(SpriteNames.Level1BgSky, '../img/sprites/backgrounds/bg_lvl-1-sky.png');
  }

  create() {
    console.log('boot-scene');
    this.createInfoForDeveloper();
    this.scene.start(SceneRoute.Preload);
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
