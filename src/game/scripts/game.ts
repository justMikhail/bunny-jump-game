import 'phaser';

// Other
import { DataBase } from './utils/DataBase';
import GameColor from './const/GameColor';

// Scenes
import PreloadScene from './scenes/PreloadScene';
import ExampleScene from './scenes/ExampleScene';

const initGame = (gameWidth, gameHeight, gameContainer) => {
  const mainGameConfig = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: GameColor.Example,
    parent: gameContainer,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: DataBase.BasicGravityForce },
      },
    },
    scene: [
      PreloadScene,
      ExampleScene,
    ],
  };

  return new Phaser.Game(mainGameConfig);
};

window.addEventListener('DOMContentLoaded', () => {
  initGame(DataBase.GameScreenWidth, DataBase.GameScreenHeight, 'phaser-game');
});
