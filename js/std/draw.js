import { checkInput } from "./input.js"
import { checkLevel } from "./level.js"

const draw = (entities) => {
    const {
        player,
        background,
        guide,
        bubble,
        people,
        door,
        foreground,
        bak2out
    } = entities

    background.update()
    player.update()
    foreground.update()

    checkInput(player, bubble)
    checkLevel(entities)

    const conversationID = player.stats.conversationID

    if (conversationID != -1) {
        player.state = "idle"
        player.speed = 0
        player.stalled = true

        bubble.conversationID = conversationID
        bubble.update()

        if (bubble.finished) {
            player.stats.conversationID = -1
            bubble.reset()
        }
    } else {
        player.stalled = false
    }
}

export { draw }