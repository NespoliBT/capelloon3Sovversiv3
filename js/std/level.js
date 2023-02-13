import { levels } from "../constants/levels.js"

const ctx = document.getElementById("canvas").getContext("2d")
let oldLevel = 0

function checkLevel(entities) {
    const {
        player,
        background,
        guide,
        bubble,
        people,
        door,
        foreground
    } = entities

    const stage = player.stats.stage

    if (stage != oldLevel) {
        oldLevel = stage
        background.stage = stage
        foreground.stage = stage

        background.isLoading = true

        setTimeout(() => {
            background.isLoading = false
        }, 1000);
    }

    if (stage == 0) {
        guide.x = 400

        guide.update()
    }

    if (stage == 1) {
        people.x = 400
        door.x = 810
        door.stage = "bar"

        people.update()
        door.update()
    }

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
    const selectedLevel = levels[level]

    if (source === "left") {
        if (selectedLevel.boundLeft === null) { player.x = 0; return }

        player.stats.stage = selectedLevel.boundLeft
        player.x = 960 - player.width
    }

    if (source === "right") {
        if (selectedLevel.boundRight === null) { player.x = 960 - player.width; return }

        player.stats.stage = selectedLevel.boundRight
        player.x = 0
    }

    if (source === "door") {
        console.log(selectedLevel);
        player.stats.stage = selectedLevel.door.stage
        player.x = selectedLevel.door.x
    }
}

export { checkLevel, changeLevel }