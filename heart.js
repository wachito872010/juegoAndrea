class Heart {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = 720;
      this.y = 30;
    
      this.w = 45;
      this.h = 45;

      this.vx = 0;
      this.vy = 0;

      this.ax = 0;   
      this.ay = 0;   

  
      this.img = new Image();
      this.img.frames = 2;
      this.img.frameIndex = 0;
      this.img.src = './img/heart.png'
      

      this.tick = 0;
  
     
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
    

}