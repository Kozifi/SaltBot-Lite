module.exports.run = async (bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    message.channel.send(target + ' joined discord at ' + target.createdAt + '.');
}

module.exports.help = {
    name: "joindate"
}