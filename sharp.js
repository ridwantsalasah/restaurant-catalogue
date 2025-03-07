const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'src/public/images/heros');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach((image) => {
        sharp(`${target}/${image}`)
            .resize(600)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                .slice(0, -1)
                .join('.')}-large.jpg`));

        sharp(`${target}/${image}`)
            .resize(200, 100)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                .slice(0, -1)
                .join('.')}-small.jpg`));

        sharp(`${target}/${image}`)
            .resize(1250)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                .slice(0, -1)
                .join('.')}-max.jpg`));
    });
