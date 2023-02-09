class Entity {
    constructor(x, y, width, height, speed, sprite, state = "idle") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.sprite = sprite;
        this.state = state

        this.img = new Image()
        this.img.src = this.sprite

        this.ctx = document.getElementById("canvas").getContext("2d")
    }

    move() {
        this.x += this.speed;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    update() {
        this.move();
        this.draw();
    }

    setSprite(sprite) {
        this.sprite = sprite;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}

export default Entity