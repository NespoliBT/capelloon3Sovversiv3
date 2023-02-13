const levels = {
    0: {
        boundLeft: null,
        boundRight: 1,
    },
    1: {
        boundLeft: 0,
        boundRight: 2,
        door: {
            x: 0,
            stage: "bar"
        }
    },
    2: {
        boundLeft: 1,
        boundRight: null,
    },
    "bar": {
        boundLeft: 1,
        boundRight: null,
    }
}

export { levels }