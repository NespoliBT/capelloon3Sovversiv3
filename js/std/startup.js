import Player from "../classes/player.js"
import Background from "../classes/background.js"
import Guide from "../classes/guide.js"
import Bubble from "../classes/bubble.js"
import Bak2Out from "../classes/bak_2_out.js"
import People from "../classes/people.js"
import Door from "../classes/door.js"
import preload from "./preload.js"
import Foreground from "../classes/foreground.js"

const createPlayer = () => {
    return new Player(
        20,
        384,
        96,
        96,
        0,
        "idle",
        "player"
    )
}

const createGuide = () => {
    const guide = new Guide(
        2000,
        384,
        96,
        96,
        0,
        "idle",
        "guide"
    )

    guide.setDirection(-1)

    return guide
}

const createBak2Out = () => {
    const bak2out = new Bak2Out(
        2000,
        384,
        96,
        96,
        0,
        "idle",
        "bak2out"
    )

    bak2out.setDirection(-1)

    return bak2out
}

const createPeople = () => {
    return new People(
        2000,
        400,
        96,
        96,
        0,
        "idle",
        "people"
    )
}

const createDoor = () => {
    return new Door(
        2000,
        400,
        48,
        48,
        0,
        window.debug ? window.assets.red : "",
        "",
        "door"
    )
}

const createEntities = () => {
    const bubble = new Bubble()
    const background = new Background()
    const foreground = new Foreground()

    const player = createPlayer()
    const guide = createGuide()
    const bak2out = createBak2Out()
    const people = createPeople()
    const door = createDoor()

    return {
        player,
        background,
        guide,
        bubble,
        people,
        door,
        foreground,
        bak2out
    }
}

const startup = async () => {
    window.assets = await preload()
    window.entities = createEntities()

    return window.entities
}

export { startup }