import * as Phaser from 'phaser';

// Other
import { DataBase } from './utils/data-base';
import { GameColor } from './const/game-color';
// import { resizeGame } from './utils/helpers';

// types
// import { ScaleModeType } from './types/scale-mode-type';

// Scenes
import BootScene from './scenes/boot-scene';
import PreloadScene from './scenes/preload-scene';
import StartScene from './scenes/start-scene';
import GameOverScene from './scenes/game-over-scene';
import Level1Scene from './scenes/level-1-scene';

// const defaultScreenWidth: number = DataBase.DefaultScreenWidth;
// const defaultScreenHeight: number = DataBase.DefaultScreenHeight;
// const maxScreenWidth: number = DataBase.MaxScreenWidth;
// const maxScreenHeight: number = DataBase.MaxScreenHeight;
// const scaleMode: ScaleModeType = 'SMOOTH'; // FIT OR SMOOTH

const initGame = (gameContainer, gameWidth: number, gameHeight: number) => {
  const mainGameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: GameColor.MainBackgroundColor,
    parent: gameContainer,
    scale: {
      // The game will be scaled manually in the resize()
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      // mode: Phaser.Scale.NONE,
      zoom: 1,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: {
          x: DataBase.GravityForce.BasicX,
          y: DataBase.GravityForce.BasicY,
        },
      },
    },
    scene: [
      BootScene,
      PreloadScene,
      StartScene,
      Level1Scene,
      GameOverScene,
    ],
  };

  return new Phaser.Game(mainGameConfig);
};

window.addEventListener('DOMContentLoaded', () => {
  // const initializedGame = initGame(DataBase.GameContainerId, window.innerWidth, window.innerHeight);

  initGame(DataBase.GameContainerId, window.innerWidth, window.innerHeight);

  // window.addEventListener('resize', (event) => {
  //  resizeGame(initializedGame, defaultScreenWidth, defaultScreenHeight, maxScreenWidth, maxScreenHeight, scaleMode);
  // });

  // resizeGame(initializedGame, defaultScreenWidth, defaultScreenHeight, maxScreenWidth, maxScreenHeight, scaleMode);
});
