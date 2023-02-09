import conversations from '../constants/conversations.js';
import { drawText } from '../helpers/text.js';
import Entity from './entity.js'

class Bubble extends Entity {
    constructor(state) {
        if (state == "-flip")
            super(0, 250, 96 * 4, 32 * 4, 0, `/assets/bubble/bubble-flip.png`)
        else
            super(90, 250, 96 * 4, 32 * 4, 0, `/assets/bubble/bubble.png`)

        this.oldConversationID = -1
        this.conversationID = -1
        this.conversation = null

        this.currentLineIndex = 0
        this.currentTextIndex = 0

        this.currentActorImg = new Image()

        this.finished = false
    }

    next() {
        if (this.conversation != null) {
            if (
                this.currentLineIndex == this.conversation.lines.length - 1 &&
                this.currentTextIndex == this.conversation.lines[this.currentLineIndex].texts.length - 1
            ) {
                this.finished = true

                return
            }

            if (this.currentTextIndex < this.conversation.lines[this.currentLineIndex].texts.length - 1) {
                this.currentTextIndex++
            } else {
                this.currentLineIndex++
                this.currentTextIndex = 0
                this.state = this.state == "-flip" ? "" : "-flip"
                this.img.src = `/assets/bubble/bubble${this.state}.png`
                this.x = this.state == "-flip" ? 0 : 90
                this.currentActorImg.src = `/assets/${this.conversation.lines[this.currentLineIndex].actor}/profile.png`
            }
        }
    }

    draw() {
        if (this.oldConversationID != this.conversationID) {
            this.oldConversationID = this.conversationID
            this.conversation = conversations[this.conversationID]
            this.currentActorImg.src = `/assets/${this.conversation.actors[0]}/profile.png`
            this.finished = false
        }

        this.ctx.imageSmoothingEnabled = false;

        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
        this.ctx.fillRect(0, 0, 512, 512)

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )

        drawText(
            this.ctx,
            this.conversation["lines"][this.currentLineIndex]["texts"][this.currentTextIndex],
            this.state == "-flip" ? 25 : 175,
            290,
            280,
            16
        )

        this.ctx.drawImage(
            this.currentActorImg,
            this.state == "-flip" ? 350 : 30,
            270,
            100,
            100
        )
    }
}

export default Bubble