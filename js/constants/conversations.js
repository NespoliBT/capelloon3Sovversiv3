const conversations = {
    0: {
        actors: ["player", "guide"],
        lines: [
            {
                actor: "player",
                texts: [
                    "Scusa, mi sapresti dire dove mi trovo?",
                    "Ho un gran mal di testa e non ricordo nulla.",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Finalmente sei sveglio!",
                    "Piacere, Clippy.",
                    "Ti trovi a Carugate, l'ultima città ad essersi arresa.",
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
                    "Non mi hai ancora detto il tuo nome.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Mi chiamo...",
                    "Non ricordo.",
                    "Mi chiamo...",
                ]
            }
        ]
    },
    1: {
        actors: ["player", "guide"],
        lines: [
            {
                actor: "player",
                texts: [
                    "Quando sei arrivato qui?",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Ho cambiato la mia x, no scherzo mi hanno programmato qui.",
                    "In ogni caso, hai visto la gente che sta giocando alla gallina?",
                    "Mi chiedo se ci sia un significato nascosto.",
                    "Dovresti provarlo è molto divertente.",
                ],
                link: "http://gioco-della-gallina.nespolibt.com"
            },
            {
                actor: "player",
                texts: [
                    "...",
                    "La memoria non mi sta tornando. Aiutami, ti supplico.",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Merda, mi stavo dimenticando, aspetta che cerco il tuo file.",
                    "find ./ -type f -name player.txt",
                    "Ah, eccolo.",
                    "Il tuo nome è...",
                    "cat player.txt | grep Nome",
                    "Zeno, sei Zeno.",
                    "Ti ricordi di Zeno?",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Nel senso, il filosofo?",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "No tranquillo qui dici che eri uno studente",
                    "25 anni, prossimo a una laurea in fisica",
                    "Qui dice anche che sei fuoricorso, curioso.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Dice altro?"
                ]
            },
            {
                actor: "guide",
                texts: [
                    "La parte finale sembra essere stata codificata.",
                    "Chissà cosa c'è scritto.",
                    "Questo potrebbe esserti utile.",
                ],
                link: "/underweb/"
            },
            {
                actor: "player",
                texts: [
                    "Grazie, Clippy.",
                ]
            }
        ]
    },
    3: {
        actors: ["bak2out", "player"],
        lines: [
            {
                actor: "bak2out",
                texts: [
                    "Eccoti Zeno, finalmente",
                    "Come procede l'azione davanti al municipio?",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Ci conosciamo?",
                    "Non so dicosa stai parlando."
                ]
            },
            {
                actor: "bak2out",
                texts: [
                    "Oh no, non di nuovo.",
                    "Devi smetterla con le droghe pesanti.",
                    "\\s Ciao Zeno, sono il tuo amico Bak2out.",
                    "Stiamo organizzando un'azione davanti al municipio.",
                    "Il tuo compito è quello di assicurarti che l3 compagn3 stiano bene.",
                    "Se qualcosa dovesse andare storto leggi questo.",
                ],
                link: "https://eleuthera.it/files/materiali/Bakunin_Liberta_degli_uguali.pdf"
            },
            {
                actor: "player",
                texts: [
                    "* pensando * Forse al municipio mi ricorderò qualcosa.",
                    "Ok vado subito.",
                ]
            }
        ]
    }
}

const peopleConversations = {
    1: ["Scusa hai del tabacco per una buona causa?"],
    "bar": [
        "Questo gioco della gallina è una cazzata.",
        "Mi chiedo se ci sia un significato nascosto.",
    ],
    "barAlley": [
        " ̷̺̥̘̜͚̰̙̉̊̈́̽̇̓̄̽͘̕̕͜Ç̴̛̛̖̼̼̰͎̤̥̖͔̤̥͙̥̩̫͉̘͕͈͈̩͍͉̙̙̻͉̞͍̘͍̑̓̈́̈́̉̎̈́̿̽̐̃̄͋̽̏̔̄̀͂̀̈́̔̈̓͐͗͌̐̌̉̀̚͘̚͝͝͠͝ͅḨ̴̨̨̨̛͇̬͈͔̞͔͎̜͔̘͔͔͇̯̥̭̞̠̞̲̫̳̪̳̺̟͉̫̙̳̲̯̳̩̹̜̏̈́̇͋͋̓̓ͅI̴̧̡͎̎̅̌̊̀͜ ̴̢̧̗̰̪̻̪̘͇̣̼̦̗͖͙̼̱̖̈́̒̎̃̔͜͜͝ͅͅŞ̶̡̨̡̨̡̧̡̛̛̗̝̰̯̮̻̼̞͔̩͙͓̼̰͎̱̱͍̣̪̣͕͖͓̬̝̬̤̝͇͇͚̮͕̉̊̇̅́͌̄͛̽͋͆͊͑̌̑̽̄̾͋̿̀͆̂͑̀͆̾͗̓͛̈́͐̕͝͝͝͝Ȩ̶͔̭̙̫̝̟͕̖̣͎͂́̂́͊̿̂̊̒͊͛̔̔͌͋͒̉̈́͑͛͆̐̀̔̎͆͘͝I̶̡̨̛̼̳̰͕̼͈͛̾̀̀̉͐̒̆͗́̅̍̌́̋̇̓́͋̾̉͑̈́̕̕͝.̷̡̧̧̬̭̺̖̝̺̜͖̺͉̗͈͈̭̹̬̼͙̲̞̱͖̯̯̙͎̗̬̝͖̗̑͋̀̈̊̐̿̄͂͘͜͜͜͜ ̴̧̨̡̫̟̰̰̦̖̖̞͍̰͙̲̱̙̳̝̗̝̼̲̙͙̭̩̝̩͉̳̼̪̩͚͓̹̔̌̐̈̌͐̾̃̎͘͜͜ͅͅḼ̷̡̡̨̢̢̧̨̡̲͈̫̙͙̤̱͈̲̼̯̱͍͕̫͈͙̻̲̻̙͔̙̠͚̼̱͈̘̙́̉̈́͛̄̅͋̿̓͑̀̎̈̒̆̽̓́̂́͗͑̋͘͜͝͝͝ͅA̵̧̡̛̯͕͖̳̰͎̮̖̖̦̝̫̗̲̭̦̰͉̱̦̻̗̺̗̠͔̟̫̻̩̬̤̋́̉́̓̉͒̐̀̋́̓͛̒͘͘͜͝͠ͅͅŞ̴̨̨̨̡̧͈͕͇̬̰̞̞̠̼̮͙̺̯̱̲̜̘͚̼̤̮̤̜̦̬͒̓̓̓͋̈́̆͗̅̒̍̀̃̌͋̊́̓͗̾͛́̾̀̃̏̒͘̕̕͜͜͜͝Ć̵̢̧̡̡̛̻͔̦̰̟͙̱͚̞̹͓̥̠̹̻͔̣̞̘͎̙̯̙̉͗̑͒̃͑́͌̎̓̒͌̀̾̆̓̒́̀̎̏͂̀̑̎̃̿͑̚͘͜͜͜͝͝͠I̵̢̢̢̛̤̺̣͚͙̫͍̹̩͖̻̘̹̫͎͓͍̦̩̥̮̬̝͚̫̅̏̏̃̾͊̀̓̀̀͒̍̿̐͗͛̈͛́͂̆̃͌͐̀̇̒̊̃̚͘͠͝͠Ạ̵̧̧̨̛̛̭̭̖̘̳̖̦̖͔̫̘̟͈̰̻̼͈͎͖̫̺̀̿̅̏̓̍̒̿̈́̌͛̔̓̓̾͆̐͊͌̍͛͋̇̈͊͛͗̾͆̐͑͜ͅͅM̸̧̨̢̡͙̯̮̺̙͇̪̩̣̰͍͎̣̟̝͇͔̮̯̖̀͑̌̀̎̀̄͐͌̉̑́̾̋̀̆͊̓́̐͛̎͊̓̃́̿̂̀͗̎́͂͛̑͜͠I̶͉̦͖̼̦̫̓́͑͑̌͌͂̑̿̄̊͑̑́͛̃̔̀͊̈́̓̓̒̍̍̎͛͛͑̓͋̃̂́͌̔̍̕͜͝͝͝͠ ̸̨̢̨̡͓͈̼͚̜̳̖̺̣͉͉̣̙̭̘͔̦̲͙̳͉͔̪̤̺͕̪̗̺̩̜̱̰̔̈̌̍̐̈́̽̒̍̏͐̔̽̋̓̏͝͠ͅS̴̨̢̛̝̰̱̭͚̖̩̤̻͙̹͙̑͋̈̂́̇̽̾́̂̚͜͝͝T̴̨̜̞͖͍͎͓̪̖̪͈̥̬̬̼͔̩͖̫̪̜̪̹̥̩̏͆̏͆̒́̋͊̌͑̀̂̐͆̒́̉̈́̈̔̅̀̀̍̈̏̈́̕͘͝͝Ą̷̘͍̮͍̝̳̗̜̭͙̞̲̎̈́̉̃͑͑̽͑̓̅̋̾̀͑́̈̒̕Ŗ̵̧̢̧̮͔̟͎̻̪̣̞͍̦̠͓̤̩̟̜̻̱̤̜̤̲̮͎̭̳̭̗̣̭̣̖̳̙͕̟̟̃̄͑͋̎̓͗̓̕͜͜͠Ę̷͓̻̻͚͉̮͖̗̘͈̤̼́̊̄͐̑̓͊̊̚̕͝ͅ.̵̧̢͕͙̥̣͎͇͙̬̀͌̽̚͜ ̸̡̢̨̼̠̺̥̮͙͍̦͓͉̞̥̞̖̈́̾̎̐̿͑̐̕͘̚ͅC̷̢̡̛͚̰̮͓͍̥̤̣̰͇̰̟̗̥̯͕̻̘̤̟̹̳̱̘̬͚͆̉̀̉͛́̌̏̃̍̀̌̀̎̿̆̃͋̋̊̍̑́͌̽͐͂̅͋͌͊̑̕̚͘̕̚̚̚͘͜͝ͅO̷̧̢̨̡̠̝̹͍̰͚͈̮̱̮̪̦̞̘̺͎̟͍͈̳̫͇̿̍̽̋̾͗͐͆̊͒͋̈́̓̔̐̔̓̋̐̆̃M̴̘̦̭̀̍́̐̋͑̇̑̈́̈̈́͠Ę̵̡̧̬̟̗͕̙̦͓̯̭̜̹̼̠̮̤̻̜͓̱̖̭̫̟̗͚̙̲̭͎̮͔̜͚͇̪̍̽̑̒̽͛̌͌̉̌́̑̌͒͋͛̾͋̇͊͌̈́͗̈͂͒̈́̌͌͛́̔̔̒̐͆̾͘̚̚̚͜͜͜͝͝ ̴̡̥̹̭̖͚͓̭̬͕̝̱̦͎̝̩̠͙̼͍̩̬̳̻̫̟̻̞̲͓̰̘͑̑͒̓̉̎͂̀̌̐̈́̐͐̈́͐̓̇̓̃̆̓͐̿̃̿̌͌͛̒̌̋͋̀̌͑́͘̕͝͠͠͝͝S̵̡̨̧̧̛̛̼̲̟͖͚̙̲̱̦͓̼͉͙̟̼̻̼̪͈͑͗̊͌͗͌͊̌̒̄̄̚ͅO̸̧̨̢͖̠̹̭͈̜̫͇͎̝̜̫͉̯̮̯̤̤̮͓̞̙̦͖̭͉͍̿͒͒̾̍̇͜N̷̗̭̹̗̟̒̀̒̇̄̿̒̾͋͆͆̓͊̿̀͆̓̓͆̿̉̋̅͂͘̕̚̚͜͜͝͠͝O̸̧̜͇̲̮̜͆͐̋̈̈́̎̚͜͠͝ ̸̢̨̛̥̗̣̪̙̯̝̩͙̯̮͚͔̜̮̣͎̝̫̮͍̺̭͕̋̔̏̌̎͑͆͊̈́͆̈́̃̐̆̾̅͑̂̑͌̅͒́́̒͐̎͝ͅͅͅF̵̡̯̪̺͕̗̤̝̬̝͉͉͉̱̫̥̹̥̟̱̥̻̖͓̹̮̜͉̜͇̩̟̰̻̮̟͉͔̘͎̓̈́͛̈̒̐̕̚ͅǏ̴̝̗͌̌̌͐̑̂̓͋̈́̇͛̀͗̋̂̐͒̈́͌̍̍͑́͊̊͑̀͘̕͘͠Ṉ̶̢̺̤̥͙̰͇̬͕̯̗̺͗̐̍̿̇̈́̾͐̓͂͆̀̈́͂̅̂́̇̊͂͐͐̇̃̕͘͜͝͝Ḭ̶̧̖̠̘̫̤̖̻̘͓̤͎̯̹̱̩͈̯̪͉̥̃̅̒̈̊̂̅̐͛̈̑̓͆̏̅͑̿̈́͒͂͐͑̊̀̀͆͜T̵͉͈͚͍̼͈̠͍̝͙̬͙̍́̋́̈́͛̈́̾͂͌̅̊̈́͋̋͆͂͘̕͝O̸̢̨̫̯̤͔̰͓̥̻̦̖̺̣̫̖̱͓̲̪̪̹͖͚̩̞͇̘͇̹̾͜͜ ̴̨̧̢̛̛͍̫͙̯͓͎̯̰̟̟͎̹̫̲̳̥̣͓͎̣͚̤̦̝̟̬̗̼͕̲̰͈̤̘̩̻̀̾̆̉̈́͋͗͐̾̄̽̈́͐́͊͂̂̌̈́̓͊͊͑̽͆͊̂̒͆̊͛͊̇̈̊̐̕͠͠͝͠ͅͅͅQ̴̢̛̮͓͈̗͕͕̰͇̲͍̹͎̙̭͖̬̄̄͂͂̆̐́̏̽͐͛́͗̅̋͊̀̀̾͋͂̈͑̃͆̄͂̅̓̇̎̒̏͘͘̚̕̚͜͠͠U̷͇̫̪͑́̓̔̈́Ǐ̶̛̛͉̻̹̻̈̀̍̑̅̀̑̃̓̀͐͆̊̂̽̽͗̍́͒̅͑̿́̄̕͝͝͝͝͝.̸̢̛̪͎͔̙̲̘̦̳͍͎̞̬̝̥̤̰̣̘̜͍̌͛̎̈͊̽͜"
    ]
}

export { conversations, peopleConversations }