import { drawText } from '../helpers/text.js'
import ComplexEntity from './complexEntity.js'
import { peopleConversations } from '../constants/conversations.js'

class People extends ComplexEntity {
    constructor(x, y, w, h, s, state, id) {
        super(x, y, w, h, s, state, id)

        this.showConversation = false
        this.conversationID = -1
        this.step = 0

        setInterval(() => {
            this.step++
            if (peopleConversations[this.conversationID] &&
                this.step >= peopleConversations[this.conversationID].length
            ) {
                this.step = 0
            }
        }, 2000);
    }


    update() {
        this.move()
        this.draw()

        if (this.showConversation)
            this.drawConversation()

        this.showConversation = false
        this.checkCollision()
    }

    drawConversation() {
        this.ctx.fillStyle = "#000000"
        this.ctx.fillRect(this.x, this.y - 100, 200, 100)

        drawText(
            this.ctx,
            peopleConversations[this.conversationID][this.step],
            this.x + 10,
            this.y - 75,
            190,
            16,
            "#ffffff",
        )
    }

    onCollision(entity) {
        if (entity.id === "player") {
            this.showConversation = true
        }
    }
}

export default People