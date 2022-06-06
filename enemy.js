class Enemy {

    constructor(ctx) {
        this.ctx = ctx;
        this.x = this.ctx.canvas.width;
        this.y = Math.random() * this.ctx.canvas.height;
      
        this.w = 45;
        this.h = 45;
    
        this.vx = -5;
        this.tick = 0;
   
        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = './img/malo1.png'

        
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

    animate() {
        if (this.vy === 0) {
          this.characterImg.frameIndex++;
    
          if (this.characterImg.frameIndex >= this.characterImg.frames) {
            this.characterImg.frameIndex = 0;
          }
        }
      }
    
  
    move() {
      this.x += this.vx;
      this.tick++
     
      if (this.tick >= 10){
        this.tick = 0
        this.animate();
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