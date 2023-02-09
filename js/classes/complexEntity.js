import Entity from "./entity.js"

class ComplexEntity extends Entity {
    constructor(x, y, width, height, speed, state, id, sprite = "") {
        super(x, y, width, height, speed, sprite, state)
        this.id = id

        this.stateImgs = []
        this.xOffset = 0
        this.direction = 1

        const img = new Image()
        img.src = `/assets/${id}/${state}.png`

        this.stateImgs[state] = img

        setInterval(() => {
            if (this.direction == 1) {
                this.xOffset += this.width
                this.xOffset %= this.stateImgs[this.state].naturalWidth
            } else {
                this.xOffset -= this.width
                if (this.xOffset < 0) this.xOffset = this.stateImgs[this.state].naturalWidth - this.width
            }
        }, 100);
    }

    draw() {
        const img = new Image()
        const flipped = this.direction == 1 ? "" : "-flip"

        if (!this.stateImgs[this.state + flipped]) {
            this.stateImgs[this.state + flipped] = img
            img.src = `/assets/${this.id}/${this.state}${flipped}.png`
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