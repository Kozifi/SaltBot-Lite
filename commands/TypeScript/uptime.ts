//Shows how long the bot have been online for
var moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    message.channel.send(`I have been online for ${duration}!`)
}

module.exports.help = {
    name: "uptime"
}