import ComplexEntity from "./complexEntity.js"
import { changeLevel } from "../std/level.js"
import { levels } from "../constants/levels.js"
import Bullet from "./bullet.js"

class Player extends ComplexEntity {
    constructor(x, y, w, h, s, state, id) {
        super(x, y, w, h, s, state, id)

        this.stalled = false

        this.isShooting = false

        this.stats = {
            stage: 0,
            conversationID: -1,
            conversationsHad: []
        }
    }

    update() {
        this.move()
        this.draw()

        this.checkBounds()
        this.checkCollision()

        if (levels[this.stats.stage].alt && this.isShooting == false) {
            document.body.classList.add("lolcat")
            this.isShooting = true
        }

        if (window.wakeup == "Le patate di mamma") {
            window.wakeup = ""

            window.close()
        }
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

    shoot() {
        setInterval(() => {
            for (let i = 0; i < 6; i++) {
                const angle = i * (Math.PI / 3);
                const xSpeed = 10 * Math.sin(angle);
                const ySpeed = -10 * Math.cos(angle);

                new Bullet(
                    this.x + this.width / 2,
                    this.y + this.height / 2,
                    40,
                    40,
                    xSpeed,
                    "idle",
                    "bullet",
                    ySpeed
                )
            }
        }, 4000);
    }

    onCollision(entity) {
        if (entity.id === "background") {
            this.action = ""
        }

        if (entity.conversationID != undefined && entity.id != "people") {
            if (this.stats.conversationsHad.includes(entity.conversationID)) return

            this.stats.conversationID = entity.conversationID
            this.stats.conversationsHad.push(entity.conversationID)
        }

        if (entity.id === "door") {
            if (this.action === "entering") {
                this.stats.stage = entity.stage
            } else {
                this.action = "enter"
                this.actionImg = assets.actions[this.action]
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

    up() {
        this.state = "run"
        this.speedY = -4
    }
    down() {
        this.state = "run"
        this.speedY = 4
    }
}

export default Player