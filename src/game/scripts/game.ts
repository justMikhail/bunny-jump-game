import * as Phaser from 'phaser';

// Other
import { DataBase } from './utils/data-base';
import { GameColor } from './const/game-color';

// Scenes
import BootScene from './scenes/boot-scene';
import PreloadScene from './scenes/preload-scene';
import StartScene from './scenes/start-scene';
import GameOverScene from './scenes/game-over-scene';
import Level1Scene from './scenes/level-1-scene';

type ScaleMode = 'FIT' | 'SMOOTH';

const DEFAULT_WIDTH = 390;
const DEFAULT_HEIGHT = 844;
const MAX_WIDTH = 576;
const MAX_HEIGHT = 1024;
const SCALE_MODE: ScaleMode = 'SMOOTH'; // FIT OR SMOOTH

const initGame = (gameContainer, gameWidth: number, gameHeight: number) => {
  const mainGameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: GameColor.MainBackgroundColor,
    parent: gameContainer,
    scale: {
      mode: Phaser.Scale.NONE,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      // mode: Phaser.Scale.FIT,
      // autoCenter: Phaser.Scale.CENTER_BOTH,
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
  const game = initGame(DataBase.GameContainerId, window.innerWidth, window.innerHeight);

  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const width = DEFAULT_WIDTH;
    const height = DEFAULT_HEIGHT;
    const maxWidth = MAX_WIDTH;
    const maxHeight = MAX_HEIGHT;
    const scaleMode = SCALE_MODE;

    const scale = Math.min(w / width, h / height);
    const newWidth = Math.min(w / scale, maxWidth);
    const newHeight = Math.min(h / scale, maxHeight);

    const defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT;
    const maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT;
    const maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT;

    // smooth scaling
    let smooth = 1;
    if (scaleMode === 'SMOOTH') {
      const maxSmoothScale = 1.15;
      const normalize = (value: number, min: number, max: number) => (value - min) / (max - min);
      if (width / height < w / h) {
        smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
      } else {
        smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
      }
    }

    // resize the game
    game.scale.resize(newWidth * smooth, newHeight * smooth);

    // scale the width and height of the css
    game.canvas.style.width = `${newWidth * scale}px`;
    game.canvas.style.height = `${newHeight * scale}px`;

    // center the game with css margin
    // game.canvas.style.marginTop = `${(h - newHeight * scale) / 2}px`;
    // game.canvas.style.marginLeft = `${(w - newWidth * scale) / 2}px`;
  };
  window.addEventListener('resize', (event) => {
    resize();
  });
  resize();
});
