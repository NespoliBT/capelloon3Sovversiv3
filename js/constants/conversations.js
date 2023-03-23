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
                    "You are finally awake! *",
                    "Piacere, Clippy.",
                    "Eh testina, ci troviamo a Carugate, l'ultima città in cui il governo si è arreso.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Arreso? A cosa?",
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
                    "...Mi chiamo...",
                    "Non ricordo."
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Vatti a prendere una birretta, magari ti aiuta."
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
                    "Come sei arrivato qui?",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Con la mia barca.",
                    "In ogni caso, hai visto la gente che sta giocando alla gallina?",
                    "Mi chiedo se ci sia un significato nascosto.",
                    "Dovresti provarlo, è molto divertente.",
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
                    "find ./ -type f -name *.txt",
                    "Ah, eccolo.",
                    "Il tuo nome è...",
                    "cat U2FsdGVkX19Ydz*.txt | grep Nome",
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
                    "No tranquillo, qui dice che sei uno studente.",
                    "25 anni, prossimo a una laurea in fisica.",
                    "Dice anche che sei fuoricorso, curioso.",
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
                    "La parte finale sembra essere stata cryptata.",
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
                    "Come procede l'azione davanti alla Macrohard?",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Ci conosciamo?",
                    "Non so di cosa stai parlando."
                ]
            },
            {
                actor: "bak2out",
                texts: [
                    "Oh no, non di nuovo.",
                    "Devi smetterla con le droghe pesanti.",
                    "\\s Ciao Zeno, sono il tuo amico Bak2out.",
                    "Ti ricordi dell'azione davanti alla Macrohard, vero?",
                    "Il tuo compito è quello di assicurarti che l3 compagn3 stiano bene.",
                    "Se qualcosa dovesse andare storto leggi questo.",
                ],
                link: "https://eleuthera.it/files/materiali/Bakunin_Liberta_degli_uguali.pdf"
            },
            {
                actor: "player",
                texts: [
                    "- Meglio indagare -",
                    "Ok vado subito.",
                ]
            }
        ]
    },
    "macrohard": {
        actors: ["guide", "player", "jenny"],
        lines: [
            {
                actor: "guide",
                texts: [
                    "Questi della Macrohard sono dei veri mattacchioni."
                ]
            },
            {
                actor: "player",
                texts: [
                    "Un giorno mi devi insegnare a teletrasportarmi."
                ]
            },
            {
                actor: "jenny",
                texts: [
                    "Pronto per entrare Zeno?"
                ]
            },
            {
                actor: "player",
                texts: [
                    'Mi ricordi chi sono questi "mattacchioni"?',
                ]
            },
            {
                actor: "jenny",
                texts: [
                    "Hanno monopolizzato il mercato e distrutto la concorrenza.",
                    "Il solito schifo!",
                    "Si fanno chiamare innovatori, salvatori della libertà",
                ]
            },
            {
                actor: "guide",
                texts: [
                    "Non hanno capito che la libertà che tanto bramavano li ha resi ciechi, che sciocchi",
                ]
            },
            {
                actor: "jenny",
                texts: [
                    "Devono rendersi conto che la paura non può fare più male di un sogno. *",
                    "Ti ricordi quando eravamo bambini e ci raccontavano storie di mostri?",
                    "È arrivato il momento di confrontare i mostri."
                ]
            }
        ]
    },
    "macrohard-inside": {
        actors: ["tfT_UdqThD", "player"],
        lines: [
            {
                actor: "tfT_UdqThD",
                texts: [
                    "Che bastardi, non esistono più questi alberi.",
                    "Hanno monopolizzato anche questi.",
                    "Dopo aver inquinato l'aria, l'acqua, la terra, ora se la godono.",
                    "Non è giusto.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Veramente non esistono più?",
                    "- Eppure mi sembra di averli visti -",
                ]
            },
            {
                actor: "tfT_UdqThD",
                texts: [
                    "Nel 2050 le temperature globali sono salite di 2 gradi.",
                    "Tanti ecosistemi sono stati distrutti.",
                    "Tanti altri sono dovuti cambiare, adattarsi all'asfalto.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "- 2050?! Come vola il tempo. -",
                    "Che dici, andiamo a dirgliene due?"
                ]
            },
            {
                actor: "tfT_UdqThD",
                texts: [
                    "Non aspettavo altro.",
                    "Tieni questo, potrebbe esserti utile.",
                ],
                link: "/assets/uno_reverse_card.jpg"
            },
            {
                actor: "player",
                texts: [
                    "Ehm... grazie?",
                ]
            }
        ]
    },
    "macrohard-0": {
        actors: ["player_", "player"],
        lines: [
            {
                actor: "player_",
                texts: [
                    "Buffo trovarti qui.",
                    "Pensavo che ne avessi abbastanza della macrohard.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Sono piuttosto sicuro sia la mia prima volta qui.",
                    "Bel taglio di capelli, chi sei?"
                ]
            },
            {
                actor: "player_",
                texts: [
                    "Ti sei licenziato dalla macrohard, anzi, ci siamo licenziati.",
                    "Eppure tutto sommato ti trovavi bene.",
                    "Hai fatto un sacco di amicizie e hai guadagnato un sacco di soldi.",
                    "Eppure non ti sentivi libero.",
                    "Chi può farsi chiamare libero in fondo?",
                    "Siamo tutt3 schiav3 delle nostre agende, dei nostri vizi.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "La ricerca della libertà è fine a se stessa.",
                    "Non è un obiettivo, è un processo.",
                    "Eduardo Galeano ne sapeva qualcosa di orizzonti.",
                ]
            },
            {
                actor: "player_",
                texts: [
                    "Mi mancherà il mio lavoro.",
                    "Quanto è comodo stare sotto le coperte e lavorare da casa.",
                    "Fare lo stretto necessario e non avere un pensiero critico verso il mondo.",
                    "Non vuoi tornare indietro?",
                    "...",
                    "TI PREGO, TI SCONGIURO, TORNA INDIETRO.",
                ]
            },
            {
                actor: "player",
                texts: [
                    "Un caro amico mi ha consigliato un gioco, dovresti provarlo.",
                    "Chi si ferma perde.",
                    "Chi corre vince.",
                    "Il futuro arriva oggi, reggiti a me.",
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
    ],
    "macrohard": [
        "Tout le monde déteste la police!",
    ]
}

export { conversations, peopleConversations }
