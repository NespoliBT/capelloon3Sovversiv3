import { draw } from "./std/draw.js"
import { startup } from "./std/startup.js"

document.addEventListener("DOMContentLoaded", () => {
    const entities = startup()

    const canvas = document.getElementById("canvas")

    canvas.width = 480
    canvas.height = 380

    const aspectRatio = canvas.width / canvas.height

    if (window.innerWidth < window.innerHeight) {
        canvas.style.width = window.innerWidth + "px"
        canvas.style.height = (window.innerWidth / aspectRatio) + "px"
    } else {
        canvas.style.width = (window.innerHeight * aspectRatio) + "px"
        canvas.style.height = window.innerHeight + "px"
    }

    setInterval(() => {
        draw(entities)
    }, 10)
})