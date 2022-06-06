class Player {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 50;
      this.y = 50;
    
      this.w = 70;
      this.h = 70;
  
      this.vx = 0;
      this.vy = 0;
  
      this.ax = 0;   
      this.ay = 0;   //cuando suba la nave this.ay = -0.3  cuando baje la nave this.ay = 0.3
 
  
      this.img = new Image();
      this.img.frames = 2;
      this.img.frameIndex = 0;
      this.img.src = './img/nave.png'
      

      this.tick = 0;
  
      this.bullets = [];

     
    }
     
  
    draw() {
        this.ctx.drawImage(
            this.img,
           (this.img.width * this.img.frameIndex) / this.img.frames , 
            0, 
           
            this.img.width / 2, 
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
      );

      this.bullets.forEach((bullet) => {
        bullet.draw();
      });
  
    }
  
    move() {
      this.vy += this.ay;
  
      this.vx += this.ax;
  
      this.x += this.vx;
      this.y += this.vy;


  
      this.tick++;

      
  
      if (this.tick > 10 && this.ay) {
       this.tick = 0;
        this.img.frame++;
  
        if (this.img.frame > 2) {
          this.img.frame = 0;
        }
      } 


      this.bullets.forEach((bullet) => {
        bullet.move();
      });
  
      this.bullets = this.bullets.filter((b) => b.isVisible());
        
  
      if (this.y + this.h > this.ctx.canvas.height) {
        this.y = this.ctx.canvas.height - this.h;
        this.vy = 0;
      }
  
      if (this.x + this.w > this.ctx.canvas.width) {
        this.x = this.ctx.canvas.width - this.w;
        this.vx = 0;
      }
  
      if (this.x < 0) {
        this.x = 0;
        this.vx = 0;
      }
      
      if (this.y < 0) {
        this.y = 0;
        this.vy = 0;
      }
      

    }

    
    
    keyDown(key) {
        if (key === UP) {
      this.vy = -6;
      
        }

        if (key === DOWN) {
        this.vy = 6;
        
      }

        if (key === RIGHT) {
      this.vx = 6;
        }

        if (key === LEFT) {
      this.vx = -6;
        }

        if (key === SPACE) {
        this.shoot();
      }
  }

  keyUp(key) {
    if (key === UP) {
        this.vy = 0;
        
      }
  
      if (key === DOWN) {
          this.vy = 0;
          
        }
  
      if (key === RIGHT) {
        this.vx = 0;
      }
  
      if (key === LEFT) {
        this.vx = 0;
      }
  }

  
  shoot() {
    const bullet = new Bullet(
      this.ctx,
      this.x + this.w - 1,
      this.y + this.h - 37,
    );

    this.bullets.push(bullet);
  }


}