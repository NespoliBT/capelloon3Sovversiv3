import Entity from "./entity.js";

class Foreground extends Entity {
    constructor() {
        const assets = window.assets
        super(0, 0, 960, 480, 0, assets.stages[0].fg, "", "foreground")

        this.stage = 0
        this.oldStage = 0
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false;

        if (this.oldStage != this.stage) {
            this.sprite = assets.stages[this.stage].fg
            this.oldStage = this.stage
        }

        this.ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

export default Foreground