import { levels } from "../constants/levels.js"

function checkInput(player, bubble) {
    document.onkeydown = (e) => {
        if (e.key === " ") {
            if (player.action === "enter") player.enterDoor()
            else
                bubble.next()
        }

        if (!player.stalled) {
            if (e.key === "ArrowRight") {
                player.right()
            }
            if (e.key === "ArrowLeft") {
                player.left()
            }

            if (levels[player.stats.stage].alt == true) {
                if (e.key === "ArrowUp") {
                    player.up()
                }
                if (e.key === "ArrowDown") {
                    player.down()
                }
            }
        }
    }


    document.onkeyup = (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowDown") {
            player.state = "idle"
            player.xOffset = 0
            player.speed = 0
            player.speedY = 0
        }
    }
}

export { checkInput }