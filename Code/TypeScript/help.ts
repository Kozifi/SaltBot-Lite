//Sends a help list. Note that this is just the default saltbot list, change as appropriate.

var Discord = require("discord.js");
var config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    var generalhelp = new Discord.RichEmbed()
        .setColor("#bb55ff")
        .addField("Fun <:XDDDD:476825018337329159>", "**-fight <user> [user]** Defeat someone in an epic battle!\n**-iam <userid> <text>** Why be yourself when you got the option not to?\n**-bottleflip** Try to hit an epic bottleflip! \n**-opinion [question]** Ask the bot something. Mixed results\n**-spinner [color]** Spins a fidget spinner. Epic, right?\n**-spinnerduel <user>** Challenges someone to a fidget spinner duel.\n**-heal <user>** Heals someone\n**-fact** Random fact about salt.")
        .addBlankField(true)
        .addField("Image editing 🖼", "**-natsuki <goodimg> <badimg>** Natsuki approves\n**-dangofy <img>** Make some dangos!\n**-betrayal <img>** Top 10 anime betrayals\n**-plottwist <img>** Top 10 craziest anime plot twists\n**-gone <text>** 🦀SOMETHING IS GONE🦀\n**-death <img>** Top 10 anime deaths\n**-powerful <img>** Damn, that thing is powerful")
        .addBlankField(true)
        .addField("Utility 🛠", "**-avatar [user]** Get someones avatar\n**-invite** Gets an invite link to invite " + config.botname + " to a server\n**-joindate [user]** Gets the date when you (or someone else) joined discord\n**-uptime** Shows time since the last restart\n**-stats** Shows botstats\n**-coinflip** Flips a coin")
        .addBlankField(true)
        .addField("Reactions <:drake2:426015892804206621>", "**-hot** Ahh. That’s hot, that’s hot.\n**-sad **This is so sad.\n**-kanye** When something is very cool!\n**-reverse** Sends a reverse card with a random color.\n**-victory** Achieves that W!\n**-salt** Gives you information about salt\n**-comrad** Shows you *our* song!\n**-no <anime/kpop/hentai/fortnite>** Forbid something")

    message.channel.send(generalhelp);
}

module.exports.help = {
    name: "help"
}

//hyperlinks: [display](link)