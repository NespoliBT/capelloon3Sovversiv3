import conversations from '../constants/conversations.js';
import { drawText } from '../helpers/text.js';
import Entity from './entity.js'

class Bubble extends Entity {
    constructor(state) {
        if (state == "-flip")
            super(0, 500, 96 * 7.5, 32 * 7.5, 0, "")
        else
            super(200, 500, 96 * 7.5, 32 * 7.5, 0, "")

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
                this.x = this.state == "-flip" ? 40 : 200
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
        this.ctx.fillRect(0, 0, 960, 480)

        this.ctx.drawImage(
            this.currentActorImg,
            this.state == "-flip" ? 650 : 30,
            500,
            280,
            280
        )

        drawText(
            this.ctx,
            this.conversation["lines"][this.currentLineIndex]["texts"][this.currentTextIndex],
            this.state == "-flip" ? 80 : 350,
            560,
            550,
            24,
            "white"
        )
    }
}

export default Bubble