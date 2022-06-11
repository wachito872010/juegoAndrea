class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 25;
    this.y = 40;
    this.value = 0;
  }

  draw() {
    this.ctx.font = "25px Fantasy";
    this.ctx.strokeStyle = "Red";
    this.ctx.fillText(`Score: ${this.value}`, this.x, this.y);
  }
}
