import ComplexEntity from "./complexEntity.js"
import { changeLevel } from "../std/level.js"

class Player extends ComplexEntity {
    constructor(x, y, w, h, s, state, id) {
        super(x, y, w, h, s, state, id)

        this.stalled = false

        this.stats = JSON.parse(localStorage.getItem("stats"))

        this.hasMeetGuide = false
    }

    update() {
        this.move()
        this.draw()

        this.checkBounds()
        this.checkCollision()
    }

    checkBounds() {
        if (this.x < 0) this.onBoundLeft()
        if (this.x > 960 - this.width) this.onBoundRight()
    }

    onBoundLeft() {
        changeLevel(this, this.stats.stage, "left")
    }

    onBoundRight() {
        changeLevel(this, this.stats.stage, "right")
    }

    enterDoor() {
        changeLevel(this, this.stats.stage, "door")
    }

    onCollision(entity) {
        if (entity.id === "background") {
            this.action = ""
        }
        if (entity.id === "guide") {
            if (this.stats.conversationID == -1 && this.hasMeetGuide == false) {
                const newStats = JSON.parse(localStorage.getItem("stats"))
                newStats.conversationID = 0
                this.stats = newStats
                this.hasMeetGuide = true
                localStorage.setItem("stats", JSON.stringify(newStats))
            }
        }
        if (entity.id === "door") {
            if (this.action === "entering") {
                this.stats.stage = entity.stage
                localStorage.setItem("stats", JSON.stringify(this.stats))
            } else {
                this.action = "enter"
                this.actionImg.src = "/assets/actions/enter.png"
            }
        }
    }

    right() {
        this.state = "run"
        this.speed = 4
        this.direction = 1
    }

    left() {
        this.state = "run"
        this.speed = -4
        this.direction = -1
    }

}

export default Player