import * as Phaser from 'phaser';

import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';
import CounterFps from '../prefabs/counter-fps';
import { FrameKey } from '../const/frame-key';

import Player from '../prefabs/player';
import PlatformGroup from '../prefabs/platform-group';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;

  player;

  basicPlatforms: PlatformGroup;

  Lvl1Bg1;

  Lvl1Bg2;

  Lvl1Bg3;

  Lvl1Bg4;

  Lvl1Bg5;

  cursors;

  platformClass;

  constructor() {
    super({ key: SceneKeys.Level1 });
  }

  create() {
    const { width, height } = this.scale;
    console.log('level-1-scene');
    this.createBackground();
    this.createPlatforms();
    this.createPlayer();
    this.addColliders();
    this.createInfoForDeveloper();

    this.cursors = this.input.keyboard.createCursorKeys();

    // this.cameras.main
    //   .startFollow(this.player)
    //   .setFollowOffset(0, 100)
    //   .setLerp(1, 0.1);
  }

  update() {
    this.fpsCounter.update();

    this.player.addMovement(this.cursors);

    const touchingDown = this.player.body.touching.down;
    if (touchingDown) {
      // this.player.setVelocityY(-400);
    }

    // this.basicPlatforms.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
    //   const platform = child;
    //   const { scrollY } = this.cameras.main;
    //
    //   if (child.y >= scrollY + this.scale.height) {
    //     platform.y = scrollY - 100;
    //     platform.body.updateFromGameObject();
    //   }
    // });

    // this.Lvl1Bg4.tilePositionY -= 1.5;
  }

  createBackground() {
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

    // this.Lvl1Bg4 = this.add
    //   .image(0, 0, TextureKey.Lvl1Bg4)
    //   .setOrigin(0)
    //   .setDisplaySize(width, height);

    this.Lvl1Bg4 = this.add
      .tileSprite(0, 0, width, height, TextureKey.Lvl1Bg4)
      .setOrigin(0);

    this.Lvl1Bg4.width = width;

    this.Lvl1Bg5 = this.add
      .image(width * 0.5, height, TextureKey.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4);
  }

  createPlatforms() {
    this.basicPlatforms = new PlatformGroup(this);
    this.basicPlatforms.createPlatforms();
    // const platformItem = Platform.generate(this, 250, 500, TextureKey.BasicPlatform).setScale(0.4);
    // this.basicPlatforms = this.physics.add.staticGroup();
    // this.basicPlatforms.add(platformItem);
    // console.log(this.basicPlatforms);
    //
    // const platformsCount = 5;
    // const { width } = this.scale;
    //
    // for (let i = 0; i < platformsCount; i += 1) {
    //   const x = Phaser.Math.Between(width * 0.5, width * 0.5);
    //   const y = 200 * i;
    //
    //   const platform = new Platform(this, x, y, TextureKey.BasicPlatform).setScale(0.4);

    // const { body } = platform;
    // body.updateFromGameObject();
    // }
  }

  createPlayer() {
    const { width, height } = this.scale;

    this.player = Player.generate(
      this,
      width * 0.5,
      height * 0.5,
      TextureKey.Player.AlternativeSkin,
      FrameKey.Player.AlternativeSkin.Stand,
    ).setScale(0.4);
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
