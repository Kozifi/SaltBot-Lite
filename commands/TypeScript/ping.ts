module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send("Pinging...");
    await msg.edit(`🏓 Pong! \`Ping: ${msg.createdTimestamp - message.createdTimestamp}\``);
};

module.exports.help = {
    name: "ping"
}