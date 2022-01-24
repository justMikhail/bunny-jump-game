import { SceneKeys } from '../const/scene-keys';

// scenes
import BootScene from './boot-scene';
import { TextureKey } from '../const/texture-key';
import { DataBase } from '../utils/data-base';

// objects

export default class PreloadScene extends BootScene {
  constructor() {
    super({ key: SceneKeys.Preload });
  }

  preload(): void {
    // backgrounds
    this.load.image(TextureKey.Lvl1Bg1, '../img/sprites/backgrounds/lvl-1/bg1.png');
    this.load.image(TextureKey.Lvl1Bg2, '../img/sprites/backgrounds/lvl-1/bg2.png');
    this.load.image(TextureKey.Lvl1Bg3, '../img/sprites/backgrounds/lvl-1/bg3.png');
    this.load.image(TextureKey.Lvl1Bg4, '../img/sprites/backgrounds/lvl-1/bg4.png');
    this.load.image(TextureKey.Lvl1Bg5, '../img/sprites/backgrounds/lvl-1/bg5.png');
    // player
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
    // platforms
    this.load.image(TextureKey.BasicPlatform, '../img/sprites/platforms/ground_stone.png');
    this.load.image(TextureKey.BrokenPlatform, '../img/sprites/platforms/ground_stone_broken.png');
    // items

    // sounds
  }

  create(): void {
    console.log('preload-scene');
    this.createBackground();
    super.createInfoForDeveloper();
    this.scene.start(SceneKeys.Start);
  }

  createBackground(): void {
    this.add.sprite(DataBase.DefaultScreenWidth * 0.5, DataBase.DefaultScreenHeight * 0.5, TextureKey.StartMenuBg);
  }
}
