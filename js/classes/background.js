import Entity from "./entity.js";

class Background extends Entity {
    constructor(sprite) {
        super(0, 0, 480, 240, 0, sprite)
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false;

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )

        this.ctx.fillStyle = "#ffffff"
        this.ctx.fillRect(0, 240, 480, 140)
    }
}

export default Background