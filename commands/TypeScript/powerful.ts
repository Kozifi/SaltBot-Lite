//Places the input image on a youtube video and sends it.
//Requires the folder "files" in one directory under the script, with the image "toopowerful.png".
var Jimp = require('jimp');
var fs = require('fs')
var crypto = require("crypto");
var isImageUrl = require('is-image-url');
module.exports.run = async (bot, message, args) => {
    let sourceimg = './files/toopowerful.png'
    //Check message for attachments, if none, check and use link
    if (message.attachments.size > 0) {
        var Attachment = (message.attachments).array();
        var inputimg = Attachment[0].url
    } else {
        inputimg = args.join(" ");
    }
    let finalimg = `./editedfiles/powerful ${crypto.randomBytes(2).toString('hex')}.png`

    //Check if the input link is an image
    if (isImageUrl(inputimg)) {
        let status = await message.channel.send('Working...');
        //Load both files, resize input to the correct size, then add it to the source
        Jimp.read(sourceimg).then(function (sourceimage) {
            Jimp.read(inputimg).then(function (inputimg) {
                inputimg.resize(1300, 734);
                sourceimage.composite(inputimg, 0, 0).write(finalimg);
                message.channel.send({ files: [finalimg] });
                status.delete();
            })
        })

        //Error message if the link isn't a message
    } else
        message.channel.send("I couldn't find an image :(\nTry **-powerful [imglink]** or attach an image with your message");
}

module.exports.help = {
    name: "powerful",
    description: "This guy is too powerful..."
}