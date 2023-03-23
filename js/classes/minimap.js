import Entity from "./entity.js";
import { levels } from "../constants/levels.js";
import { getCookie } from "../helpers/cookie.js";

const levelsMap = {
    0: 0,
    1: 1,
    bar: 2,
    barAlley: 3,
    macrohard: 4,
    "macrohard-inside": 5,
    "macrohard-0": 6,
}


export default class Minimap extends Entity {
    constructor(x, y, width, height, speed, state, id, sprite = "") {
        super(x, y, width, height, speed, window.assets.red, state, id)
        this.stage = 0
        this.stats = JSON.parse(getCookie("stats"))

        this.mapArray = [[]]
        const mapHeight = 5
        const mapWidth = 5

        for (let i = 0; i < mapHeight; i++) {
            this.mapArray[i] = []
            for (let j = 0; j < mapWidth; j++) {
                this.mapArray[i][j] = "x"
            }
        }

        this.generateMap(0, 0, 0, Math.floor(mapHeight / 2))
        this.xOffset = 0
        this.yOffset = 0

        window.debug && console.log(this.flippedMap())
    }

    draw() {
        this.xOffset += 90
        this.yOffset += 90
        this.x = Math.sin(this.xOffset) * 2 + 740
        this.y = Math.sin(this.yOffset) * 1 + 20

        this.ctx.fillStyle = "#00000060"
        this.ctx.fillRect(this.x - 3, this.y - 3, this.width + 6, this.height + 6)
        this.ctx.fillStyle = "#55ff5560"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)

        const stage = this.stage

        for (let i = 0; i < this.mapArray.length; i++) {
            for (let j = 0; j < this.mapArray[i].length; j++) {
                if (this.mapArray[i][j][0] == "x") continue

                const levelObj = levels[this.mapArray[i][j][2]]

                if (this.mapArray[i][j][0] == levelsMap[stage]) {
                    this.ctx.fillStyle = "#000000"
                    this.ctx.fillRect(this.x + 20 + i * 30, this.y + 30 + j * 30, 10, 10)
                    this.ctx.fillStyle = "#00ff00"
                    this.ctx.fillRect(this.x + 22 + i * 30, this.y + 32 + j * 30, 6, 6)
                } else {
                    this.ctx.fillStyle = "#000000"
                    this.ctx.fillRect(this.x + 20 + i * 30, this.y + 30 + j * 30, 10, 10)
                }

                if (levelObj["restriction"] != undefined && !this.stats.conversationsHad.includes(levelObj["restriction"])) {
                    this.ctx.fillStyle = "#ff0000"
                } else {
                    this.ctx.fillStyle = "#000000"
                }

                if (this.mapArray[i][j][1] == "right") {
                    this.ctx.fillRect(this.x - 7 + i * 30 + 10, this.y + 34 + j * 30, 15, 2)
                }
                if (this.mapArray[i][j][1] == "left") {
                    this.ctx.fillRect(this.x + 23 + i * 30 + 10, this.y + 34 + j * 30, 15, 2)
                }
                if (this.mapArray[i][j][1] == "down") {
                    this.ctx.fillRect(this.x + 24 + i * 30, this.y + 2 + j * 30 + 10, 2, 15)
                }
                if (this.mapArray[i][j][1] == "up") {
                    this.ctx.fillRect(this.x + 24 + i * 30, this.y + 33 + j * 30 + 10, 2, 15)
                }
            }
        }
    }

    generateMap(l, prevL, x, y, direction) {
        const level = levels[l]
        this.mapArray[x][y] = [levelsMap[l], direction, l]
        this.stats = JSON.parse(getCookie("stats"))

        if (level.entities.door && level.entities.door.stage != null && level.entities.door.stage != prevL) {
            if (this.mapArray[x][y + 1] == "x")
                this.generateMap(level.entities.door.stage, l, x, y + 1, "down")
            else
                this.generateMap(level.entities.door.stage, l, x, y - 1, "up")
        }
        if (level.boundRight != null && level.boundRight != prevL) {
            this.generateMap(level.boundRight, l, x + 1, y, "right")
        }
        if (level.boundLeft != null && level.boundLeft != prevL) {
            this.generateMap(level.boundLeft, l, x - 1, y, "left")
        }
    }

    flippedMap() {
        const returnedMap = []

        for (let i = 0; i < this.mapArray[0].length; i++) {
            let str = ""
            for (let j = 0; j < this.mapArray.length; j++) {
                str += (this.mapArray[j][i][0] || "0") + " "
            }
            returnedMap.push(str)
        }

        return returnedMap
    }
}