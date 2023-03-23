import Entity from "./entity.js";

export default class Bullet extends Entity {
    constructor(x, y, w, h, s, state, id, sy) {
        super(x, y, w, h, s, state, id)

        this.speedY = sy
        this.sprite = window.assets.bullets.hammer

        setInterval(() => {
            this.update()
        }, 10);
    }

    update() {
        this.move()
        this.draw()

        if (this.x > 960 || this.y > 760 || this.y < 0 || this.x < 0) {
            delete this
        }
    }

    move() {
        this.x += this.speed
        this.y += this.speedY
    }
}