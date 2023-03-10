function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

function drawText(ctx, text, x, y, maxWidth, size = 40, color = "black") {
    ctx.font = `${size}px NerdFont`;
    ctx.fillStyle = color;
    const lines = getLines(ctx, text, maxWidth);
    lines.forEach((line, index) => {
        ctx.fillText(line, x, y + (index * size * 1.2));
    });
}

export { getLines, drawText }