import Player from "../classes/player.js"
import Background from "../classes/background.js"
import Guide from "../classes/guide.js"
import Bubble from "../classes/bubble.js"
import Bak2Out from "../classes/bak_2_out.js"
import Jenny from "../classes/jenny.js"
import Minimap from "../classes/minimap.js"
import tfT_UdqThD from "../classes/tfT_UdqThD.js"
import People from "../classes/people.js"
import Door from "../classes/door.js"
import preload from "./preload.js"
import Foreground from "../classes/foreground.js"
import { setCookie, getCookie } from "../helpers/cookie.js"
import Player_ from "../classes/player_.js"

const createPlayer = () => {
    return new Player(
        20,
        408,
        56,
        72,
        0,
        "idle",
        "player"
    )
}

const createPlayer_ = () => {
    return new Player_(
        20,
        384,
        96,
        96,
        0,
        "idle",
        "player_"
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
        400,
        96,
        96,
        0,
        "idle",
        "bak2out"
    )

    bak2out.setDirection(-1)

    return bak2out
}

const createJenny = () => {
    const jenny = new Jenny(
        2000,
        384,
        96,
        96,
        0,
        "idle",
        "jenny"
    )
    jenny.setDirection(-1)

    return jenny
}

const createtfT_UdqThD = () => {
    return new tfT_UdqThD(
        2000,
        384,
        96,
        96,
        0,
        "idle",
        "tfT_UdqThD"
    )
}

const createMinimap = () => {
    return new Minimap(
        740,
        20,
        200,
        200,
        0,
        "idle",
        "minimap",
    )
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
    const player_ = createPlayer_()
    const guide = createGuide()
    const bak2out = createBak2Out()
    const jenny = createJenny()
    const minimap = createMinimap()
    const tfT_UdqThD = createtfT_UdqThD()
    const people = createPeople()
    const door = createDoor()

    return {
        player,
        background,
        guide,
        bubble,
        people,
        jenny,
        tfT_UdqThD,
        door,
        minimap,
        foreground,
        bak2out,
        player_,
    }
}

const startup = async () => {
    setCookie("stats", JSON.stringify({
        conversationsHad: [],
    }))
    window.assets = await preload()
    window.entities = createEntities()

    return window.entities
}

export { startup }