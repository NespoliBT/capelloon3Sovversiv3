import Entity from "./entity.js";

class Background extends Entity {
    constructor(sprite) {
        super(0, 0, 960, 480, 0, sprite, "", "background")

        this.stage = 0
        this.oldStage = 0
        this.isLoading = false
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false;

        if (this.oldStage != this.stage) {
            this.oldStage = this.stage
            this.img.src = `/assets/stages/${this.stage}/bg.png`
        }

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )

        this.ctx.fillStyle = "#000000"
        this.ctx.fillRect(0, 480, 960, 280)
    }
}

export default Background