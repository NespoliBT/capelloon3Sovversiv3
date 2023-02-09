import ComplexEntity from "./complexEntity.js"

class Player extends ComplexEntity {
    constructor(x, y, w, h, s, state, id) {
        super(x, y, w, h, s, state, id)

        this.stalled = false

        this.stats = JSON.parse(localStorage.getItem("stats"))
    }

    onCollision(entity) {
        if (entity.id === "guide" && !this.stats.hasMeetGuide) {
            const newStats = JSON.parse(localStorage.getItem("stats"))
            newStats.hasMeetGuide = true
            newStats.conversationID = 0
            this.stats = newStats
            localStorage.setItem("stats", JSON.stringify(newStats))
        }
    }

    right() {
        this.state = "run"
        this.speed = 1
        this.direction = 1
    }

    left() {
        this.state = "run"
        this.speed = -1
        this.direction = -1
    }
}

export default Player