//Sends your own or a mentioned users profile picture. Will send a status message that will get deleted when the picture is sent.

var Discord = require("discord.js");
var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({
        files: [
            {
                attachment: target.displayAvatarURL,
                name: "avatar.png"
            }
        ]
    });

    msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "Sends your own or a mentioned users profile picture."
}