var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Places the input images on a template and sends it. Both have to be a link.
//Requires the folder "files" in one directory under the script, with the image "natsuki.png".
var Jimp = require('jimp');
var fs = require('fs');
var isImageUrl = require('is-image-url');
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    let sourceimg = './files/natsuki.png';
    let finalimg = './editedfiles/natsukiapproves.png';
    let good = args[0];
    let bad = args[1];
    //Check if the input link is an image
    if (isImageUrl(good) && isImageUrl(bad)) {
        let status = yield message.channel.send('Working...');
        //Load both files, resize input to the correct size, then add it to the source
        Jimp.read(sourceimg).then(function (sourceimage) {
            Jimp.read(good).then(function (good) {
                Jimp.read(bad).then(function (bad) {
                    good.resize(139, 139);
                    bad.resize(130, 130);
                    sourceimage.composite(good, 53, 175).composite(bad, 307, 153).write(finalimg);
                });
            });
        });
        //Skicka bilden efter 2.5s
        setTimeout(function () {
            message.channel.send("Here you go " + message.member.displayName + "!", { files: [finalimg] });
            status.delete();
            message.delete();
        }, 2500);
        //Radera bilden efter 4s
        setTimeout(function () {
            fs.unlinkSync(finalimg);
        }, 4000);
        //Error message if the link isn't a message
    }
    else
        message.channel.send("I couldn't two images :(\nTry **-natsuki [img1] [img2]**");
});
module.exports.help = {
    name: "natsuki",
    description: "What does Natsuki prefer?"
};
//# sourceMappingURL=natsuki.js.map