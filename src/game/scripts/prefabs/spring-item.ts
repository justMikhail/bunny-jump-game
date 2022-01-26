import * as Phaser from 'phaser';
import ExtraObjectItem from './extra-object-item';

export default class SpringItem extends ExtraObjectItem {
  static generate(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
    return new SpringItem(scene, x, y, texture, frame);
  }
}
