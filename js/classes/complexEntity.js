import Entity from "./entity.js"


class ComplexEntity extends Entity {
    constructor(x, y, width, height, speed, state, id, sprite = "") {
        super(x, y, width, height, speed, sprite, state, id)

        this.stateImgs = []
        this.xOffset = 0
        this.direction = 1
        this.action = ""
        this.actionImg = null

        const assets = window.assets

        this.stateImgs[state] = assets[id][state]

        setInterval(() => {
            if (this.direction == 1) {
                this.xOffset += this.width
                this.xOffset %= assets[id][
                    state + (this.direction == 1 ? "" : "-flip")
                ].naturalWidth
            } else {
                this.xOffset -= this.width
                if (this.xOffset < 0) this.xOffset = assets[id][
                    state + (this.direction == 1 ? "" : "-flip")
                ].naturalWidth - this.width
            }

        }, 100);
    }

    draw() {
        const flipped = this.direction == 1 ? "" : "-flip"

        if (!this.stateImgs[this.state + flipped]) {
            this.stateImgs[this.state + flipped] = assets[this.id][this.state + flipped]
        }

        if (this.action != "") {
            this.ctx.drawImage(
                this.actionImg,
                this.x + this.width / 2 - this.actionImg.width / 2,
                this.y - this.actionImg.height + 10,
                40,
                40
            )
        }

        this.ctx.drawImage(
            this.stateImgs[this.state + flipped],
            this.xOffset,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        )

    }

    update() {
        this.move()
        this.draw()

        this.checkCollision()
    }

    checkCollision() {
        const entities = Object.values(window.entities)

        for (let i = 0; i < entities.length; i++) {
            if (entities[i].id == this.id) continue

            if (this.x < entities[i].x + entities[i].width &&
                this.x + this.width > entities[i].x &&
                this.y < entities[i].y + entities[i].height &&
                this.y + this.height > entities[i].y) {
                if (this.onCollision) this.onCollision(entities[i])
            }
        }
    }

    setDirection(direction) {
        this.direction = direction
    }
}

export default ComplexEntity