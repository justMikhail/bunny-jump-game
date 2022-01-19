import { ScaleModeType } from '../types/scale-mode-type';

// the custom resize function
export const resizeGame = (initialGame, defaultWidth, defaultHeight, maxWidth, maxHeight, scaleMode: ScaleModeType) => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const scale = Math.min(w / defaultWidth, h / defaultHeight);
  const newWidth = Math.min(w / scale, maxWidth);
  const newHeight = Math.min(h / scale, maxHeight);

  const defaultRatio = defaultWidth / defaultHeight;
  const maxRatioWidth = maxHeight / defaultHeight;
  const maxRatioHeight = defaultWidth / maxHeight;

  // smooth scaling
  let smooth = 1;
  if (scaleMode === 'SMOOTH') {
    const maxSmoothScale = 1.15;
    const normalize = (value: number, min: number, max: number) => (value - min) / (max - min);
    if (defaultWidth / defaultHeight < w / h) {
      // eslint-disable-next-line max-len
      smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
    } else {
      // eslint-disable-next-line max-len
      smooth = -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;
    }
  }

  const game = initialGame;

  // resize the game
  game.scale.resize(newWidth * smooth, newHeight * smooth);

  // scale the "defaultWidth" and "defaultHeight" of the css
  game.canvas.style.width = `${newWidth * scale}px`;
  game.canvas.style.height = `${newHeight * scale}px`;

  // center the game with css margin
  game.canvas.style.marginTop = `${(h - newHeight * scale) / 2}px`;
  game.canvas.style.marginLeft = `${(w - newWidth * scale) / 2}px`;
};
