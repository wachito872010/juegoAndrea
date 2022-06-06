class Game {
    constructor(ctx) {
      this.ctx = ctx;
      
      this.player = new Player(ctx);
      this.bg = new Background(ctx);
  
      this.enemies = [];
  
      this.interval = null;
  
      this.setListeners()
      this.tick = 0;
    }
  
    start() {
      this.interval = setInterval(() => {
        this.clear();
        this.draw();
        this.move();
        this.checkCollisions();
    
        

        this.tick++;

      if (this.tick > Math.random() * 200 + 100) {
        this.tick = 0;
        this.addEnemy();
      }
      }, 1000 / 60);
    }
  
    stop() {
      
    }


    addEnemy() {
        const enemy = new Enemy(this.ctx);
        this.enemies.push(enemy);
    }
  
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.enemies = this.enemies.filter((e) => e.isVisible());
    }
  
    draw() {
      this.bg.draw();
      this.player.draw();
      this.enemies.forEach((e) => e.draw());
    }
  
    move() {
    this.bg.move();
    this.player.move();
    this.enemies.forEach((e) => e.move());

      
    }


    setListeners() {
        document.addEventListener("keydown", (event) => {
          this.player.keyDown(event.keyCode);
        });
    
        document.addEventListener("keyup", (event) => {
          this.player.keyUp(event.keyCode);
        });
      }


      checkCollisions() {
        this.enemies.forEach((e) => {
          if (e.collides(this.player)) {
            //this.gameOver();
          }
        });

        
      }
  

  }