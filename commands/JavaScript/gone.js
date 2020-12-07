//Adds "{input} is gone" to a crab rave image
//Requires the folder "files" in one directory under the script, with the image "crab.png".
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Jimp = require('jimp');
var fs = require('fs');
var crypto = require("crypto");
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    var sourceimg = './files/crab.png';
    var inputtext = args.join(" ")
        .toUpperCase()
        .replace('IS GONE', '');
    let finalimg = './editedfiles/editedcrab.png';
    var loadedImage;
    let status = yield message.channel.send('Working...');
    //Load both files, resize input to the correct size, then add it to the source
    Jimp.read(sourceimg)
        .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    })
        .then(function (font) {
        loadedImage.print(font, 0, //x
        412, //y
        {
            text: inputtext,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        }, 1920, -150).write(finalimg);
    });
});
module.exports.help = {
    name: "gone"
};
//# sourceMappingURL=gone.js.map