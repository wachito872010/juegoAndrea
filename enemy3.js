class Enemy3 {

    constructor(ctx) {
        this.ctx = ctx;
        this.x = this.ctx.canvas.width;
        this.y = Math.random() * this.ctx.canvas.height;
        this.w = 45
        this.h = 45
        this.vx = -5;
        this.vy = 0;
  
        this.ax = 0;   
        this.ay = 0;   //cuando suba la nave this.ay = -0.3  cuando baje la nave this.ay = 0.3
   
    
        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = './img/malo3.png'
        
  
        this.tick = 0;
    }  
      
    draw() {
        this.ctx.drawImage(
            this.img,
           (this.img.width * this.img.frameIndex) / this.img.frames , 
            0, 
           
            this.img.width / 3, 
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
         );
     }
      
    move() {
      this.vy += this.ay;
  
      this.vx += this.ax;
  
      this.x += this.vx;
      this.y += this.vy;

  
      this.tick++;

      
  
      if (this.tick > 10) {
       this.tick = 0;
      
        this.img.frameIndex++;
  
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0;
        }
      } 
    }
      
    isVisible() {
          return this.x + this.w > 0;
    }
      
    collides(player) {
          const colX =
            this.x <= player.x + player.w - 20 && this.x + this.w > player.x;
          const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      
          return colX && colY;
    }
}