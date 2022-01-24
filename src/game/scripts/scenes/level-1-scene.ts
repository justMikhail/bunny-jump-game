import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';
import CounterFps from '../prefabs/counter-fps';
import { FrameKey } from '../const/frame-key';

import PlatformGroup from '../prefabs/platform-group';
import Player from '../prefabs/player';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;

  player;

  basicPlatforms: PlatformGroup;

  Lvl1Bg1;

  Lvl1Bg2;

  Lvl1Bg3;

  Lvl1Bg4;

  Lvl1Bg5;

  constructor() {
    super({ key: SceneKeys.Level1 });
  }

  create(): void {
    const { width, height } = this.scale;
    console.log('level-1-scene');
    this.createBackground();
    this.createPlatforms();
    this.createPlayer(width * 0.5, height * 0.5);
    this.addColliders();
    this.createInfoForDeveloper();
  }

  update(): void {
    this.fpsCounter.update();
    this.player.addMovement();
    // this.player.addMovement(this.cursors);

    // const touchingDown = this.player.body.touching.down;
    // if (touchingDown) {
    //   // this.player.setVelocityY(-400);
    // }
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.Lvl1Bg1 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg1)
      .setScale(0.4)
      .setScrollFactor(0, 0);

    this.Lvl1Bg2 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg2)
      .setScale(0.4);

    this.Lvl1Bg3 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg3)
      .setScale(0.4);

    this.Lvl1Bg4 = this.add
      .tileSprite(0, 0, width, height, TextureKey.Lvl1Bg4)
      .setOrigin(0);

    this.Lvl1Bg4.width = width;

    this.Lvl1Bg5 = this.add
      .image(width * 0.5, height, TextureKey.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4);
  }

  createPlatforms(): void {
    this.basicPlatforms = new PlatformGroup(this);
    this.basicPlatforms.createPlatforms();
  }

  createPlayer(positionX, positionY): void {
    this.player = Player.generate(
      this,
      positionX,
      positionY,
      TextureKey.Player.AlternativeSkin,
      FrameKey.Player.AlternativeSkin.Stand,
    ).setScale(0.4);
  }

  addColliders(): void {
    this.physics.add.collider(this.basicPlatforms, this.player);
  }

  createInfoForDeveloper(): void {
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
