import Player from "../classes/player.js"
import Background from "../classes/background.js"
import Guide from "../classes/guide.js"
import Bubble from "../classes/bubble.js"
import People from "../classes/people.js"
import Door from "../classes/door.js"
import preload from "./preload.js"
import Foreground from "../classes/foreground.js"


const startup = () => {
    preload()

    localStorage.setItem("stats", JSON.stringify({
        "conversationID": -1,
        "stage": 0
    }))

    const player = new Player(
        20,
        400,
        96,
        96,
        0,
        "idle",
        "player"
    )

    const background = new Background(
        "/assets/stages/0/bg.png"
    )

    const foreground = new Foreground(
        "/assets/stages/0/fg.png"
    )

    const guide = new Guide(
        2000,
        400,
        96,
        96,
        0,
        "idle",
        "guide"
    )

    guide.setDirection(-1)

    const people = new People(
        2000,
        400,
        96,
        96,
        0,
        "idle",
        "people"
    )

    const bubble = new Bubble(
        ""
    )

    const door = new Door(
        2000,
        400,
        48,
        48,
        0,
        "",
        "",
        "door"
    )

    const entities = {
        player,
        background,
        guide,
        bubble,
        people,
        door,
        foreground
    }

    window.entities = entities

    return entities
}

export { startup }