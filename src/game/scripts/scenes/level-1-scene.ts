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
import { store } from '../store/store';

export default class Level1Scene extends Phaser.Scene {
  fpsCounter;
  player;
  currentPlayerSkin;
  basicPlatforms: PlatformGroup;
  spring;
  springGroup;
  lvl1Bg1;
  lvl1Bg2;
  lvl1Bg3;
  lvl1Bg4;
  lvl1Bg5;

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
    this.addParallaxEffectForBackground();

    /* track the maximum amount that the hero has travelled */
    // this.player.yChange = Math.max(this.player.yChange, Math.abs(this.player.y - this.player.yOrig));
  }

  createBackground(): void {
    const { width, height } = this.scale;

    this.lvl1Bg1 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg1)
      .setScale(0.4)
      .setScrollFactor(0)
      .setDisplaySize(width, height);

    this.lvl1Bg2 = this.add
      .image(width * 0.5, height * 0.5, TextureKey.Lvl1Bg2)
      .setScale(0.4)
      .setScrollFactor(0)
      .setDisplaySize(width, height);

    this.lvl1Bg3 = this.add
      .tileSprite(width * 0.5, height * 0.5, 0, 0, TextureKey.Lvl1Bg3)
      .setScale(0.4)
      .setScrollFactor(0, 0)
      .setDisplaySize(width, height);

    this.lvl1Bg4 = this.add
      .tileSprite(width * 0.5, height * 0.5, 0, 0, TextureKey.Lvl1Bg4)
      .setScale(0.4)
      .setScrollFactor(0, 0)
      .setDisplaySize(width, height);

    this.lvl1Bg5 = this.add
      .image(width * 0.5, height + 70, TextureKey.Lvl1Bg5)
      .setOrigin(0.5, 1)
      .setScale(0.4)
      .setDisplaySize(width, height * 0.5);
  }

  addParallaxEffectForBackground() {
    this.lvl1Bg3.tilePositionY = this.cameras.main.scrollY * 0.3;
    this.lvl1Bg4.tilePositionY = this.cameras.main.scrollY * 0.7;
  }

  createPlatforms(): void {
    this.basicPlatforms = new PlatformGroup(this);
    this.basicPlatforms.createFirstPlatform(0.3);
    this.basicPlatforms.createPlatforms(7, 0.3);
  }

  createExtraItems(): void {
    this.springGroup = this.physics.add.group({
      classType: SpringItem,
    });

    this.springGroup.get(240, 400, TextureKey.ExtraItem.Spring).setScale(0.3);
  }

  createPlayer(positionX, positionY): void {
    if (store.getState().commonUserData.currentUserSkinId === 0) {
      this.currentPlayerSkin = TextureKey.Player.BasicSkin.Key;
    } else if (store.getState().commonUserData.currentUserSkinId === 1) {
      this.currentPlayerSkin = TextureKey.Player.AlternativeSkin.Key;
    }

    console.log(this.currentPlayerSkin);

    this.player = Player
      .generate(
        this,
        positionX,
        positionY,
        this.currentPlayerSkin,
        FrameKey.Player.Ready,
      )
      .setScale(0.4);
  }

  addColliders(): void {
    this.physics.add.collider(this.basicPlatforms, this.player);
    this.physics.add.collider(this.basicPlatforms, this.springGroup);
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
