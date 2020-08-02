//Lets users send anonymous dms to people

var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    let target = message.mentions.users.first();
    let text = args.slice(1).join(" ");
    var banlist = [
        "ids here",
        "if you wanna ban people"
    ];
    if (banlist.includes(message.author.id))
    {
        message.channel.send(message.author.toString() + " you aren't allowed to use this command due to earlier use :(")
    }
    else
    {
        if (target.bot)
        {
            message.delete();
            message.author.send(`Hey, you tried to send a dm to ${target.toString()}, but since they're a bot your message did not get sent.`)
        }
        else if (!text)
        {
            message.channel.send(`Uhh, I'm not sure what you want me to send, ${message.author.toString()}. Maybe give me some args? -dm {user} {text}`)
        }
        else
        {
            target.send(`📫 **Someone sent you an anonymous message! They said:** \n${text}`);
            message.delete();
        }
    }
}

module.exports.help = {
    name: "dm"
}