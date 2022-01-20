export default class Player extends Phaser.Physics.Arcade.Sprite {
  velocity: number;

  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame);
    this.init(data);
  }

  init(data) {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = data.velocity;
  }

  setAliveStatus(status: boolean) {
    this.body.enable = status;
    this.setVisible(status);
    this.setActive(status);
  }
}
