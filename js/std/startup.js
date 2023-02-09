import Player from "../classes/player.js"
import Background from "../classes/background.js"
import Guide from "../classes/guide.js"
import Bubble from "../classes/bubble.js"
import preload from "./preload.js"

const startup = () => {
    preload()

    localStorage.setItem("stats", JSON.stringify({
        "hasMeetGuide": false,
        "conversationID": -1,
    }))


    const player = new Player(
        20,
        200,
        48,
        48,
        0,
        "idle",
        "player"
    )

    const background = new Background(
        "/assets/background/bg.png"
    )

    const guide = new Guide(
        200,
        200,
        48,
        48,
        0,
        "idle",
        "guide"
    )

    guide.setDirection(-1)

    const bubble = new Bubble(
        ""
    )

    const entities = {
        player,
        background,
        guide,
        bubble
    }

    window.entities = entities

    return entities
}

export { startup }