import * as Phaser from 'phaser';
// ------const-----
import { SceneKeys } from '../const/scene-keys';
import { TextureKey } from '../const/texture-key';
import { FrameKey } from '../const/frame-key';
// ------classes-----
import CounterFps from '../prefabs/counter-fps';
import PlatformGroup from '../prefabs/platform-group';
import Player from '../prefabs/player';
import SpringItem from '../prefabs/spring-item';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;
  player;
  basicPlatforms: PlatformGroup;
  spring;
  springsGroup;
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
    this.createExtraItems();
    this.createPlayer(width * 0.5, height * 0.5);
    this.addColliders();
    this.createInfoForDeveloper();

    // camera
    this.cameras.main.setDeadzone(this.scale.width * 1.5);
    this.cameras.main.startFollow(this.player);
  }

  update(): void {
    this.fpsCounter.update();
    this.setHorizontalWrapForSprite(this.player);
    // this.Lvl1Bg4.tilePositionY += -3;
    // this.Lvl1Bg3.tilePositionY += -0.3;
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.Lvl1Bg1 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg1)
      .setScale(0.4)
      .setScrollFactor(0);

    this.Lvl1Bg2 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg2)
      .setScale(0.4)
      .setScrollFactor(0);

    this.Lvl1Bg3 = this.add
      .tileSprite(0, 0, 0, 0, TextureKey.Lvl1Bg3)
      .setOrigin(0, 0)
      .setScale(0.4)
      .setScrollFactor(0, 0);

    this.Lvl1Bg4 = this.add
      .tileSprite(0, 0, 0, 0, TextureKey.Lvl1Bg4)
      .setOrigin(0, 0)
      .setScale(0.4)
      .setScrollFactor(0, 0);

    this.Lvl1Bg5 = this.add
      .image(width * 0.5, height, TextureKey.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4);
  }

  createPlatforms(): void {
    this.basicPlatforms = new PlatformGroup(this);
    this.basicPlatforms.createFirstPlatform(0.3);
    this.basicPlatforms.createPlatforms(7, 0.3);
  }

  createExtraItems(): void {
    this.springsGroup = this.physics.add.group({
      classType: SpringItem,
    });

    this.springsGroup.get(240, 400, TextureKey.ExtraItem.Spring);
  }

  createPlayer(positionX, positionY): void {
    this.player = Player
      .generate(
        this,
        positionX,
        positionY,
        TextureKey.Player.AlternativeSkin,
        FrameKey.Player.AlternativeSkin.Ready,
      )
      .setScale(0.4);
  }

  addColliders(): void {
    this.physics.add.collider(this.basicPlatforms, this.player);
  }

  setHorizontalWrapForSprite(sprite: Phaser.GameObjects.Sprite) {
    const halfSpriteWidth = sprite.displayWidth * 0.5;
    const sceneWidth = this.scale.width;

    if (sprite.x < -halfSpriteWidth) {
      // eslint-disable-next-line no-param-reassign
      sprite.x = sceneWidth + halfSpriteWidth;
    } else if (sprite.x > sceneWidth + halfSpriteWidth) {
      // eslint-disable-next-line no-param-reassign
      sprite.x = -halfSpriteWidth;
    }
  }

  createInfoForDeveloper(): void {
    // display FPS
    this.fpsCounter = new CounterFps(this);
    this.fpsCounter.setScrollFactor(0);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
      })
      .setOrigin(1, 0)
      .setScrollFactor(0);
  }
}
