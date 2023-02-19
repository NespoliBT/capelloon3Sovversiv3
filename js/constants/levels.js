const levels = {
    0: {
        boundLeft: null,
        boundRight: 1,
        entities: {
            guide: {
                x: 400,
                conversationID: 0
            },
        }
    },
    1: {
        boundLeft: 0,
        boundRight: null,
        entities: {
            door: {
                xDestination: 0,
                x: 810,
                stage: "bar"
            },
            people: {
                x: 400,
                conversationID: 1
            }
        }
    },
    "barAlley": {
        boundLeft: null,
        boundRight: null,
        entities: {
            door: {
                xDestination: 810,
                x: 20,
                stage: "bar"
            },
            people: {
                x: 400,
                conversationID: "barAlley"
            },
            bak2out: {
                x: 800,
                conversationID: 3
            }
        }
    },
    "bar": {
        boundLeft: 1,
        boundRight: "barAlley",
        entities: {
            people: {
                x: 200,
                conversationID: "bar"
            },
            guide: {
                x: 600,
                conversationID: 1
            }
        }
    },

}

export { levels }