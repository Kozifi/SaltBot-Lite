//Creates a tasty dango with the input image. Saves it to ./editedfiles and then sends it in the chat.
//Requires the folder "files" in one directory under the script, with the images "dango.png" and "blank.png".

var Jimp = require('jimp');
var fs = require('fs')
var crypto = require("crypto");
var isImageUrl = require('is-image-url');
module.exports.run = async (bot, message, args) => {
    let blank = './files/blank.png'
    let sourceimg = './files/dango.png'
    //Check message for attachments, if none, check and use link
    if (message.attachments.size > 0) {
        var Attachment = (message.attachments).array();
        var inputimg = Attachment[0].url
    } else {
        inputimg = args.join(" ");
    }
    let finalimg = `./editedfiles/dango ${crypto.randomBytes(2).toString('hex')}.png`

    //Check if the input link is an image
    if (isImageUrl(inputimg)) {
        let status = await message.channel.send('Dangofying...');
        //Load both files, resize input to the correct size, then add it to the source
        Jimp.read(blank).then(function (blank) {
            Jimp.read(sourceimg).then(function (sourceimg) {
                Jimp.read(inputimg).then(function (inputimg) {
                    inputimg.resize(150, 150).rotate(45);
                    Jimp.read(blank).then(function (blank) {
                        blank.composite(inputimg, -5, -15).composite(inputimg, 75, 65).composite(inputimg, 160, 150).composite(sourceimg, 0, 0).write(finalimg);
                        message.channel.send({ files: [finalimg] });
                        status.delete();
                    })
                })
            })
        })

        //Error message if the link isn't a message
    } else
        message.channel.send("I couldn't find an image to dangofy :(\nTry **-dangofy [imglink]** or attach an image with your message 🍡");
}

module.exports.help = {
    name: "dangofy",
    description: "Make a tasty dango!"
}