const preload = () => {
    const img = new Image()
    img.src = "/assets/player/run.png"
    img.onload = () => img.src = "/assets/player/idle.png"
    img.onload = () => img.src = "/assets/player/land.png"
    img.onload = () => img.src = "/assets/player/jump.png"
}

export default preload;