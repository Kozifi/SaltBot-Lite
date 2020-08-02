//Creates a webhook and pretends to be another user

var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    let target = bot.users.get(args.slice(0, 1).join(" "));
    let text = args.slice(1).join(" ");
    if (!text) {
        message.channel.send("Uhh, I'm not sure what you want me to send, " + message.author.toString() + ". Maybe give me some args? -iam <userid> <text>")
    }
    else {
        try {
            var webhooks = await message.channel.fetchWebhooks();
            var webhook = webhooks.first();
            if (webhooks.size == 0) {
                webhook = message.channel.createWebhook("User from SaltBot", "https://i.imgur.com/lxNySwN.png");
            }
            message.delete();

            await webhook.send(text, {
                username: target.username,
                avatarURL: target.displayAvatarURL,
            });
        } catch (error) {
            console.error('Error trying to send: ', error);
        }
    }
}
module.exports.help = {
    name: "iam",
    description: "Why be yourself when you have the option not to?"
}