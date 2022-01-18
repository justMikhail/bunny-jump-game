import 'phaser';
import ExamplePrefab from '../prefabs/ExamplePrefab';

// Prefabs
import CounterFPS from '../prefabs/CounterFPS';

export default class ExampleScene extends Phaser.Scene {
  fpsCounter;

  constructor() {
    super({ key: 'example-scene' });
  }

  create() {
    // eslint-disable-next-line no-new
    new ExamplePrefab(this, this.cameras.main.width / 2, 0);
    this.createInfoForDeveloper();
  }

  update() {
    this.fpsCounter.update();
  }

  createInfoForDeveloper() {
    // display FPS
    this.fpsCounter = new CounterFPS(this);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
      })
      .setOrigin(1, 0);
  }
}
