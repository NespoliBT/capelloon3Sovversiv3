import Entity from "./entity.js";

class Foreground extends Entity {
    constructor(sprite) {
        super(0, 0, 960, 480, 0, sprite, "", "foreground")

        this.stage = 0
        this.oldStage = 0
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false;

        if (this.oldStage != this.stage) {
            this.img.src = `/assets/stages/${this.stage}/fg.png`
            this.oldStage = this.stage
        }

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

export default Foreground