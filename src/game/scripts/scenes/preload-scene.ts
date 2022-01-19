import { SceneRoute } from '../const/project-routes';

// scenes
import BootScene from './boot-scene';
import { TextureKeys } from '../const/asset-keys';

// objects

export default class PreloadScene extends BootScene {
  constructor() {
    super({ key: SceneRoute.Preload });
  }

  preload() {
    // backgrounds
    this.load.image(TextureKeys.Lvl1Bg1, '../img/sprites/backgrounds/lvl-1/bg1.png');
    this.load.image(TextureKeys.Lvl1Bg2, '../img/sprites/backgrounds/lvl-1/bg2.png');
    this.load.image(TextureKeys.Lvl1Bg3, '../img/sprites/backgrounds/lvl-1/bg3.png');
    this.load.image(TextureKeys.Lvl1Bg4, '../img/sprites/backgrounds/lvl-1/bg4.png');
    this.load.image(TextureKeys.Lvl1Bg5, '../img/sprites/backgrounds/lvl-1/bg5.png');
    // player
    this.load.atlas(
      'player',
      '../img/sprites/player/basic-skin/bunny-basic-skin.png',
      '../img/sprites/player/basic-skin/bunny-basic-skin.json',
    );
    // platforms
    this.load.image(TextureKeys.Lvl1Bg1, '../img/sprites/objects/platforms/');
    // items

    // sounds
  }

  create() {
    console.log('preload-scene');
    super.createInfoForDeveloper();
    this.scene.start(SceneRoute.Start);
  }
}
