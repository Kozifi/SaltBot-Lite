//Sets the bot play status

var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    let gamestatus = args.join(" ");
    bot.user.setActivity(config.status);
    message.channel.send("Game status changed to **" + gamestatus + "**")
}
module.exports.help = {
    name: "setgame"
}