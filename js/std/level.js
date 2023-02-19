import { levels } from "../constants/levels.js"
import { randomSentences } from "../constants/loadingSentences.js"

const ctx = document.getElementById("canvas").getContext("2d")
let oldLevel = 0

function checkLevel(entities) {
    const loading = document.getElementById("loading")
    const sentence = document.getElementById("sentence")

    const { player, background, guide, bubble, people, door, foreground } = entities

    const stage = player.stats.stage

    if (stage != oldLevel) {
        oldLevel = stage
        background.stage = stage
        foreground.stage = stage

        background.isLoading = true

        if (Math.random() > 0.2) {
            setTimeout(() => background.isLoading = false, 200);
        } else {
            sentence.innerHTML = randomSentences[Math.floor(Math.random() * randomSentences.length)]
            loading.classList.remove("hidden")
            setTimeout(() => {
                background.isLoading = false
                loading.classList.add("hidden")
            }, 4000);
        }
    }

    Object.keys(levels[stage].entities).forEach((key) => {
        const entity = entities[key]
        const levelEntity = levels[stage].entities[key]

        Object.keys(levelEntity).forEach((key) => {
            entity[key] = levelEntity[key]
        })

        entity.update()
    })

    if (background.isLoading) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, 960, 760)
        ctx.fillStyle = "white"
        ctx.font = "30px Arial"

        player.stalled = true
        player.speed = 0

        Object.keys(entities).forEach((key) => {
            const entity = entities[key]
            if (entity.id === "player") {
                player.action = ""
                return
            }
            if (entity.id === "background" || entity.id === "foreground") return

            entity.x = 2000
        })
    }
}

function changeLevel(player, level, source) {
    const selectedLevel = levels[level];
    const entities = selectedLevel.entities;

    if (source === "left") {
        if (selectedLevel.boundLeft === null) {
            player.x = 0;
            return;
        }

        player.stats.stage = selectedLevel.boundLeft;
        player.x = 960 - player.width;
    }

    if (source === "right") {
        if (selectedLevel.boundRight === null) {
            player.x = 960 - player.width;
            return;
        }

        player.stats.stage = selectedLevel.boundRight;
        player.x = 0;
    }

    if (source === "door") {
        player.stats.stage = entities.door.stage;
        player.x = entities.door.xDestination;
    }
}

export { checkLevel, changeLevel }