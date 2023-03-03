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
        boundRight: "macrohard",
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
                x: 600,
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
    "macrohard": {
        boundLeft: 1,
        boundRight: null,
        restriction: 3,
        entities: {
            people: {
                x: 200,
                conversationID: "macrohard"
            },
            jenny: {
                x: 400,
                conversationID: "macrohard"
            },
            guide: {
                x: 450,
            },
            door: {
                x: 630,
                xDestination: 420,
                stage: "macrohard-inside"
            }
        }
    },
    "macrohard-inside": {
        boundLeft: "macrohard-1",
        boundRight: null,
        entities: {
            tfT_UdqThD: {
                x: 600,
                conversationID: "macrohard-inside"
            },
            door: {
                x: 450,
                xDestination: 550,
                stage: "macrohard",
            },
        }
    },
    "macrohard-1": {
        boundLeft: null,
        boundRight: null,
        entities: {
            player_: {
                x: 200,
                conversationID: "macrohard-1"
            }
        }
    }
}

export { levels }