var Discord = require("discord.js");
var config = require("./Code/config.json");
var bot = new Discord.Client();
var fs = require("fs");
bot.disabledMembers = new Map();
bot.commands = new Discord.Collection();
fs.readdir("./commands/JavaScript/", (err, files) => {
    if (err)
        console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("No commands found :(");
        return;
    }
    //Load commands
    jsfile.forEach((f, i) => {
        let props = require(`./commands/JavaScript/${f}`);
        console.log(`File ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
//Bot started
bot.on("ready", () => {
    console.log(`Gamers, we did it. ${bot.user.username} is now online on ${bot.guilds.size} servers with ${bot.users.size} users! That's a Victory Royale!`);
    bot.channels.get(config.statuschannel).send(`${bot.user.username} is now online on ${bot.guilds.size} servers with ${bot.users.size} users!`);
    bot.user.setStatus('online');
    bot.user.setActivity(config.status);
});
//Detects messages
bot.on("message", message => {
    if (message.author.bot)
        return;
    let prefix = config.prefix;
    if (message.content.indexOf(prefix) !== 0)
        return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile)
        commandfile.run(bot, message, args);
});
bot.login(config.token);
//# sourceMappingURL=index.js.map