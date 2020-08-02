//Adds "{input} is gone" to a crab rave image
//Requires the folder "files" in one directory under the script, with the image "crab.png".

var Jimp = require('jimp');
var fs = require('fs')
var crypto = require("crypto");
module.exports.run = async (bot, message, args) => {
    var sourceimg = './files/crab.png'
    var inputtext = args.join(" ")
        .toUpperCase()
        .replace('IS GONE', '');

    let finalimg = './editedfiles/editedcrab.png'

    var loadedImage: any;
    let status = await message.channel.send('Working...');
    //Load both files, resize input to the correct size, then add it to the source
    Jimp.read(sourceimg)
        .then(function (image) {
            loadedImage = image;
            return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        })
        .then(function (font) {
            loadedImage.print(
                font,
                0, //x
                412, //y
                {
                    text: inputtext,
                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                },
                1920,
                -150
            ).write(finalimg);
        })
}

module.exports.help = {
    name: "gone"
}