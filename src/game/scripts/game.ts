import * as Phaser from 'phaser';

// Other
import { DataBase } from './utils/data-base';
import { GameColor } from './const/game-color';

// Scenes
import BootScene from './scenes/boot-scene';
import PreloadScene from './scenes/preload-scene';
import MainMenuScene from './scenes/main-menu-scene';
import GameOverScene from './scenes/game-over-scene';
import Level1Scene from './scenes/level-1-scene';

const gameScreenElement = document.getElementById('game-screen');
const gameScreenInfo = gameScreenElement.getBoundingClientRect();
const currentGameScreenWidth = gameScreenInfo.width;
const currentGameScreenHeight = gameScreenInfo.height;
console.log(`Game Container Width: ${currentGameScreenWidth}`);
console.log(`Game Container Height: ${currentGameScreenHeight}`);

const initGame = (gameContainer, gameWidth: number, gameHeight: number) => {
  const mainGameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: GameColor.MainBackgroundColor,
    parent: gameContainer,
    scale: {
      width: gameWidth,
      height: gameHeight,
      mode: Phaser.Scale.NONE,
      // mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
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
      MainMenuScene,
      Level1Scene,
      GameOverScene,
    ],
  };

  return new Phaser.Game(mainGameConfig);
};

window.addEventListener('DOMContentLoaded', () => {
  initGame(DataBase.GameContainerId, currentGameScreenWidth, currentGameScreenHeight);
});
