const conversations = {
    0: {
        actors: ["player", "guide"],
        lines: [
            {
                actor: "player",
                texts: [
                    "Buongiorno, mi sapresti dire dove mi trovo?",
                    "Ho un gran mal di testa e non ricordo nulla.",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Finalmente sei sveglio!",
                    "Ti trovi a <inserire nome>, l'ultima città ad essersi arresa.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Arresa? A cosa?",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Al realismo capitalista.",
                    "La rivoluzione è stata un fallimento e ora siamo tutti schiavi del sistema.",
                    "Ma non temere, da dopo la sconfitta la gradazione alcolica delle bevande è aumentata.",
                ]
            },
        ]
    }
}

export default conversations