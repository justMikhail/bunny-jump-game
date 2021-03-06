import 'phaser';

// utils
import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';

// Prefabs
import CounterFps from '../prefabs/counter-fps';

export default class BootScene extends Phaser.Scene {
  fpsCounter;

  preload(): void {
    this.load.image(TextureKey.StartMenuBg, '../img/sprites/backgrounds/start-menu/main-menu-bg.png');
  }

  create(): void {
    console.log('boot-scene');
    this.createInfoForDeveloper();
    this.scene.start(SceneKeys.Preload);
  }

  update(): void {
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
