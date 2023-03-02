import { checkInput } from "./input.js"
import { checkLevel } from "./level.js"
import { getCookie, setCookie } from "../helpers/cookie.js"

const draw = (entities) => {
    const {
        player,
        background,
        guide,
        bubble,
        people,
        door,
        foreground,
        bak2out,
        minimap
    } = entities

    background.update()
    player.update()
    foreground.update()
    minimap.update()

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
            const stats = JSON.parse(getCookie("stats"))
            stats.conversationsHad.push(conversationID)
            setCookie("stats", JSON.stringify(stats))
            minimap.generateMap(0, 0, 0, Math.floor(minimap.mapHeight / 2))

            player.stats.conversationID = -1
            bubble.reset()
        }
    } else {
        player.stalled = false
    }
}

export { draw }