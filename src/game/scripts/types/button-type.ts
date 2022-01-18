import * as Phaser from 'phaser';

export type ButtonType = {
  scene: Phaser.Scene,
  x: number,
  y: number,
  text,
  fontFamily: string,
  handleClick: () => void
};
