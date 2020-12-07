//Lets the user say something as the bot

var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
}

module.exports.help = {
    name: "say"
}