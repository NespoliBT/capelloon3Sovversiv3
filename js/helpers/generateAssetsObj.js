const fs = require('fs');

let assets = {};

function findFiles(path, obj) {
    const files = fs.readdirSync(path);

    files.forEach(f => {
        if (fs.lstatSync(`${path}/${f}`).isDirectory()) {
            const newObj = obj[f] = {}

            findFiles(`${path}/${f}`, newObj);
        } else {
            obj[f.split(".")[0]] = `${path}/${f}`;
        }
    })
}

findFiles("./assets", assets);

fs.writeFileSync("./js/constants/assets.js", `export default ${JSON.stringify(assets)}`);