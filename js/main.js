import { draw } from "./std/draw.js"
import { startup } from "./std/startup.js"

document.addEventListener("DOMContentLoaded", () => {
    const entities = startup()

    const canvas = document.getElementById("canvas")

    const aspectRatio = 24 / 19

    canvas.width = 480
    canvas.height = 380

    if (window.innerWidth / window.innerHeight > aspectRatio) {
        canvas.style.width = window.innerHeight * aspectRatio + "px"
        canvas.style.height = window.innerHeight + "px"
    } else {
        canvas.style.width = window.innerWidth + "px"
        canvas.style.height = window.innerWidth / aspectRatio + "px"
    }

    setInterval(() => {
        draw(entities)
    }, 10)
})