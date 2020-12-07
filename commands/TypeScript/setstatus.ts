//Set the botstatus (online, idle, dnd, offline)

module.exports.run = async (bot, message, args) => {
    let text = args.join(" ");

    if (text == "online") {
        bot.user.setStatus('avaliable')
    } else if (text == "offline") {
        bot.user.setStatus('invisible')
    } else if (text == "idle") {
        bot.user.setStatus('idle')
    } else if (text == "dnd") {
        bot.user.setStatus('dnd')
    } else {
        message.channel.send(`${text} doesn't seem to be a valid status :thinking:`);
    }
}


module.exports.help = {
    name: "setstatus"
}