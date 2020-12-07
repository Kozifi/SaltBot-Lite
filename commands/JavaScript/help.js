//Sends a help list. Note that this is just the default saltbot list, change as appropriate.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Discord = require("discord.js");
var config = require("../config.json");
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    var generalhelp = new Discord.RichEmbed()
        .setColor("#bb55ff")
        .addField("Fun <:XDDDD:476825018337329159>", "**-fight <user> [user]** Defeat someone in an epic battle!\n**-iam <userid> <text>** Why be yourself when you got the option not to?\n**-bottleflip** Try to hit an epic bottleflip! \n**-opinion [question]** Ask the bot something. Mixed results\n**-spinner [color]** Spins a fidget spinner. Epic, right?\n**-spinnerduel <user>** Challenges someone to a fidget spinner duel.\n**-heal <user>** Heals someone\n**-fact** Random fact about salt.")
        .addBlankField(true)
        .addField("Image editing 🖼", "**-natsuki <goodimg> <badimg>** Natsuki approves\n**-dangofy <img>** Make some dangos!\n**-betrayal <img>** Top 10 anime betrayals\n**-plottwist <img>** Top 10 craziest anime plot twists\n**-gone <text>** 🦀SOMETHING IS GONE🦀\n**-death <img>** Top 10 anime deaths\n**-powerful <img>** Damn, that thing is powerful")
        .addBlankField(true)
        .addField("Utility 🛠", "**-avatar [user]** Get someones avatar\n**-invite** Gets an invite link to invite " + config.botname + " to a server\n**-joindate [user]** Gets the date when you (or someone else) joined discord\n**-uptime** Shows time since the last restart\n**-stats** Shows botstats\n**-coinflip** Flips a coin")
        .addBlankField(true)
        .addField("Reactions <:drake2:426015892804206621>", "**-hot** Ahh. That’s hot, that’s hot.\n**-sad **This is so sad.\n**-kanye** When something is very cool!\n**-reverse** Sends a reverse card with a random color.\n**-victory** Achieves that W!\n**-salt** Gives you information about salt\n**-comrad** Shows you *our* song!\n**-no <anime/kpop/hentai/fortnite>** Forbid something");
    message.channel.send(generalhelp);
});
module.exports.help = {
    name: "help"
};
//hyperlinks: [display](link)
//# sourceMappingURL=help.js.map