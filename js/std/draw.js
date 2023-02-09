
const draw = (entities) => {
    const { player, background, guide, bubble } = entities

    background.update()
    guide.update()
    player.update()

    document.onkeydown = (e) => {
        if (e.key === " ") {
            bubble.next()
        }

        if (!player.stalled) {
            if (e.key === "ArrowRight") {
                player.right()
            }
            if (e.key === "ArrowLeft") {
                player.left()
            }
        }
    }

    document.onkeyup = (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            player.state = "idle"
            player.xOffset = 0
            player.speed = 0
        }
    }

    const conversationID = player.stats.conversationID

    if (conversationID != -1) {
        if (conversationID == 0) {
            player.state = "idle"
            player.speed = 0
            player.stalled = true

            bubble.conversationID = conversationID
            bubble.update()

            if (bubble.finished) {
                player.stats.conversationID = -1
            }
        }
    } else {
        player.stalled = false
    }
}

export { draw }