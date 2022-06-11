class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = 4;

    this.vx = 10;
    this.vy = 0;
  }

  draw() {
    const prevStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  isVisible() {
    return this.x + this.r < this.ctx.canvas.width;
  }

  collides(e) {
    const colX = this.x + this.r > e.x && this.x - this.r < e.x + e.w;
    const colY = this.y + this.r > e.y && this.y - this.r < e.y + e.h;
    return colX && colY;
  }

  /*collides(enemy) {
      const colX =
        this.x <= enemy.x + enemy.w - 20 && this.x + this.w > enemy.x;
      const colY = this.y + this.h > enemy.y && this.y < enemy.y + enemy.h;
  
      return colX && colY;
    }*/
}
