import { SceneKeys } from '../const/scene-keys';

// scenes
import BootScene from './boot-scene';
import { TextureKey } from '../const/texture-key';

// objects

export default class PreloadScene extends BootScene {
  constructor() {
    super({ key: SceneKeys.Preload });
  }

  preload() {
    // backgrounds
    this.load.image(TextureKey.Lvl1Bg1, '../img/sprites/backgrounds/lvl-1/bg1.png');
    this.load.image(TextureKey.Lvl1Bg2, '../img/sprites/backgrounds/lvl-1/bg2.png');
    this.load.image(TextureKey.Lvl1Bg3, '../img/sprites/backgrounds/lvl-1/bg3.png');
    this.load.image(TextureKey.Lvl1Bg4, '../img/sprites/backgrounds/lvl-1/bg4.png');
    this.load.image(TextureKey.Lvl1Bg5, '../img/sprites/backgrounds/lvl-1/bg5.png');
    // player
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

  create() {
    console.log('preload-scene');
    super.createInfoForDeveloper();
    this.scene.start(SceneKeys.Start);
  }
}
