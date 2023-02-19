import Entity from "./entity.js";


class Background extends Entity {
    constructor() {
        const assets = window.assets
        super(0, 0, 960, 480, 0, assets.stages[0].bg, "", "background")

        this.stage = 0
        this.oldStage = 0
        this.isLoading = false
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false;

        if (this.oldStage != this.stage) {
            this.oldStage = this.stage
            this.sprite = assets.stages[this.stage].bg
        }

        this.ctx.drawImage(
            this.sprite,
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