import * as Phaser from 'phaser';

type ButtonDataType = {
  scene: Phaser.Scene,
  x: number,
  y: number,
  text,
  fontType?: string,
};

export const createMenuButton = (data: ButtonDataType) => {
  const {
    scene,
    x,
    y,
    text,
    fontType = 'Arial',
  } = data;

  const canvasButton = scene.add.text(x, y, text, {
    color: '#000',
    fontFamily: fontType,
    fontStyle: 'bold',
    fontSize: '20px',
    backgroundColor: '#ffffff75',
    fixedWidth: 110,
    fixedHeight: 40,
    align: 'center',
    baselineY: 2.275,
  });

  canvasButton.setInteractive({ useHandCursor: true });

  return canvasButton;
};
