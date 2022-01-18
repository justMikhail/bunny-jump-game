import { SceneRoute } from '../const/project-routes';

// scenes
import BootScene from './boot-scene';

// objects

export default class PreloadScene extends BootScene {
  public loadingBar;

  constructor() {
    super({ key: SceneRoute.Preload });
  }

  preload() {
    // backgrounds

    // player
    this.load.atlas(
      'player',
      '../img/sprites/player/basic-skin/bunny-basic-skin.png',
      '../img/sprites/player/basic-skin/bunny-basic-skin.json',
    );
    // items

    // sounds
  }

  create() {
    console.log('preload-scene');
    super.createInfoForDeveloper();
    this.scene.start(SceneRoute.Start);
  }
}
