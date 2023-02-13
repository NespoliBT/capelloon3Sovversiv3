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
        }
    }

    document.onkeyup = (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            player.state = "idle"
            player.xOffset = 0
            player.speed = 0
        }
    }
}

export { checkInput }