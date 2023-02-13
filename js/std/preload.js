const preload = () => {
    const img = new Image()
    img.src = "/assets/player/run.png"
    img.onload = () => img.src = "/assets/player/idle.png"
}

export default preload;