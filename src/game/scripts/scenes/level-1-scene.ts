import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';
import CounterFps from '../prefabs/counter-fps';
import { AnimationKey } from '../const/animation-key';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;

  player: Phaser.Physics.Arcade.Sprite;

  basicPlatforms: Phaser.Physics.Arcade.StaticGroup;

  Lvl1Bg1;

  Lvl1Bg2;

  Lvl1Bg3;

  Lvl1Bg4;

  Lvl1Bg5;

  constructor() {
    super({ key: SceneKeys.Level1 });
  }

  create() {
    console.log('level-1-scene');
    this.createBackground();
    this.createPlatforms();
    this.createPlayer();
    this.addColliders();
    this.createInfoForDeveloper();

    this.cameras.main
      .startFollow(this.player)
      .setFollowOffset(0, 100)
      .setLerp(1, 0.1);
  }

  update() {
    this.fpsCounter.update();

    const touchingDown = this.player.body.touching.down;

    if (touchingDown) {
      this.player.setVelocityY(-400);
    }

    this.basicPlatforms.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
      const platform = child;
      const { scrollY } = this.cameras.main;

      if (child.y >= scrollY + this.scale.height) {
        platform.y = scrollY - 100;
        platform.body.updateFromGameObject();
      }
    });

    this.Lvl1Bg1.tilePositionY += 0.5;
  }

  createBackground() {
    const { width, height } = this.scale;

    this.Lvl1Bg1 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg1)
      .setScale(0.4)
      .setScrollFactor(1, 0);

    // this.Lvl1Bg1 = this.add
    //   .tileSprite(width * 0.5, height * 0.5, width, height, TextureKey.Lvl1Bg1);
    this.Lvl1Bg2 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg2)
      .setScale(0.4);
    this.Lvl1Bg3 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg3)
      .setScale(0.4);
    this.Lvl1Bg4 = this.add
      .image(0, 0, TextureKey.Lvl1Bg4)
      .setOrigin(0)
      .setDisplaySize(width, height);
    this.Lvl1Bg5 = this.add
      .image(width * 0.5, height, TextureKey.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4);
  }

  createPlatforms() {
    this.basicPlatforms = this.physics.add.staticGroup();
    const platformsCount = 5;
    const { width } = this.scale;

    for (let i = 0; i < platformsCount; i += 1) {
      const x = Phaser.Math.Between(width * 0.5, width * 0.5);
      const y = 200 * i;

      const platform = this.basicPlatforms.create(x, y, TextureKey.BasicPlatform).setScale(0.4);

      const { body } = platform;
      body.updateFromGameObject();
    }
  }

  createPlayer() {
    const { width, height } = this.scale;

    this.player = this.physics.add
      .sprite(width * 0.5, height * 0.5, TextureKey.Player.AlternativeSkin, AnimationKey.Player.AlternativeSkin.Stand)
      .setScale(0.4);

    this.player.body.checkCollision.up = false;
    this.player.body.checkCollision.left = false;
    this.player.body.checkCollision.right = false;
  }

  addColliders() {
    this.physics.add.collider(this.basicPlatforms, this.player);
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
