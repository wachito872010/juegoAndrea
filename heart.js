class Heart {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = 30;
      this.y = 30;
    
      this.w = 45;
      this.h = 45;

  
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
  
   
    

}