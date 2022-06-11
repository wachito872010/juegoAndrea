class Score {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 25
        this.y = 40
        this.value = 0
    }
    //Press Start 2P
    draw() {
        this.ctx.font = "30px Arial"
        //this.ctx.strokeStyle = 'red';
        this.ctx.fillText(`Score: ${this.value}`, this.x, this.y)
    }
    
}