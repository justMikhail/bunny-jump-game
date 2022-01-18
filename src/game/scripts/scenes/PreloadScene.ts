import SceneRoute from '../const/GameRouts';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preload-scene' });
  }

  preload() {
    this.load.image('phaser-logo', '../img/sprites/phaser-logo.png');
  }

  create() {
    this.scene.start(SceneRoute.Example);
  }
}
