class Score {
    constructor(ctx) {
      this.ctx = ctx;
  
      this.x = 20;
      this.y = this.ctx.canvas.height * 0.93;
      this.w = 200;
      this.h = 20;
  
      this.total = 1;
      // TODO: init position, size
    }
  
    draw() {
      const prevStyle = this.ctx.fillStyle;
  
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(this.x, this.y, this.w * this.total, this.h);
      this.ctx.fillStyle = prevStyle;
      this.ctx.strokeRect(this.x, this.y, this.w, this.h);
      // TODO: draw red rectangle
      // TODO: stroke black rectangle
    }
  
    move() {}
  
    dec() {
      this.total -= 0.05;
      // TODO: substract 0.5 to this.total
    }
  }