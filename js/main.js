import { draw } from "./std/draw.js"
import { startup } from "./std/startup.js"
import { loadingSentences } from "./constants/loadingSentences.js"

window.debug = true

document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading")
    const sentence = document.getElementById("sentence")
    const dots = document.getElementById("dots")
    const canvas = document.getElementById("canvas")

    canvas.width = 960
    canvas.height = 760

    const aspectRatio = canvas.width / canvas.height

    if (window.innerWidth < window.innerHeight) {
        canvas.style.width = window.innerWidth + "px"
        canvas.style.height = (window.innerWidth / aspectRatio) + "px"
    } else {
        canvas.style.width = (window.innerHeight * aspectRatio) + "px"
        canvas.style.height = window.innerHeight + "px"
    }

    const dotsInterval = setInterval(() => {
        dots.innerHTML += "."
        if (dots.innerHTML.length > 3) dots.innerHTML = ""
    }, 300);

    const sentenceInterval = setInterval(() => {
        sentence.innerHTML =
            loadingSentences[Math.floor(Math.random() * loadingSentences.length)]
    }, 2000);

    startup().then((entities) => {
        loading.classList.add("hidden")
        clearInterval(dotsInterval)
        clearInterval(sentenceInterval)

        setInterval(() => {
            draw(entities)
        }, 10)
    })
})