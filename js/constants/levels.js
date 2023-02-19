const levels = {
    0: {
        boundLeft: null,
        boundRight: 1,
    },
    1: {
        boundLeft: 0,
        boundRight: null,
        door: {
            x: 0,
            stage: "bar"
        }
    },
    "barAlley": {
        boundLeft: null,
        boundRight: null,
        door: {
            x: 810,
            stage: "bar"
        }
    },
    "bar": {
        boundLeft: 1,
        boundRight: "barAlley",
    }
}

export { levels }