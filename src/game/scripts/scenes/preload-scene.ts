import * as Phaser from 'phaser';
import { SceneKeys } from '../const/scene-keys';
// ------------ scenes ------------
import { TextureKey } from '../const/texture-key';
import { DataBase } from '../utils/data-base';
// ------------ objects ------------

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKeys.Preload });
  }

  preload(): void {
    // ---------- backgrounds -----------
    this.load.image(TextureKey.Lvl1Bg1, '../img/sprites/backgrounds/lvl-1/bg1.png');
    this.load.image(TextureKey.Lvl1Bg2, '../img/sprites/backgrounds/lvl-1/bg2.png');
    this.load.image(TextureKey.Lvl1Bg3, '../img/sprites/backgrounds/lvl-1/bg3.png');
    this.load.image(TextureKey.Lvl1Bg4, '../img/sprites/backgrounds/lvl-1/bg4.png');
    this.load.image(TextureKey.Lvl1Bg5, '../img/sprites/backgrounds/lvl-1/bg5.png');
    // ----------- player -----------
    this.load.atlas(
      TextureKey.Player.BasicSkin,
      '../img/sprites/player/basic-skin/bunny-basic-skin.png',
      '../img/sprites/player/basic-skin/bunny-basic-skin.json',
    );
    this.load.atlas(
      TextureKey.Player.AlternativeSkin,
      '../img/sprites/player/alternative-skin/bunny-alternative-skin.png',
      '../img/sprites/player/alternative-skin/bunny-alternative-skin.json',
    );
    // ----------- platforms -----------
    this.load.image(TextureKey.BasicPlatform, '../img/sprites/platforms/ground_stone.png');
    this.load.image(TextureKey.BrokenPlatform, '../img/sprites/platforms/ground_stone_broken.png');
    // ----------- items -----------
    this.load.atlas(
      TextureKey.ExtraItem.Spring,
      '../img/sprites/objects/spring/a-spring.png',
      '../img/sprites/objects/spring/a-spring.json',
    );
    this.load.image(
      TextureKey.BasicPlatform,
      '../img/sprites/objects/carrot/carrot.png',
    );
    this.load.atlas(
      TextureKey.ExtraItem.Chip,
      '../img/sprites/objects/chip/a-gold-chip.png',
      '../img/sprites/objects/chip/a-gold-chip.json',
    );
    // ----------- sounds -----------
  }

  create(): void {
    console.log('preload-scene');
    this.createBackground();
    this.scene.start(SceneKeys.Start);
  }

  createBackground(): void {
    this.add.sprite(DataBase.DefaultScreenWidth * 0.5, DataBase.DefaultScreenHeight * 0.5, TextureKey.StartMenuBg);
  }
}
