//Lets users send anonymous dms to people
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var config = require("../config.json");
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    let target = message.mentions.users.first();
    let text = args.slice(1).join(" ");
    var banlist = [
        "ids here",
        "if you wanna ban people"
    ];
    if (banlist.includes(message.author.id)) {
        message.channel.send(message.author.toString() + " you aren't allowed to use this command due to earlier use :(");
    }
    else {
        if (target.bot) {
            message.delete();
            message.author.send(`Hey, you tried to send a dm to ${target.toString()}, but since they're a bot your message did not get sent.`);
        }
        else if (!text) {
            message.channel.send(`Uhh, I'm not sure what you want me to send, ${message.author.toString()}. Maybe give me some args? -dm {user} {text}`);
        }
        else {
            target.send(`📫 **Someone sent you an anonymous message! They said:** \n${text}`);
            message.delete();
        }
    }
});
module.exports.help = {
    name: "dm"
};
//# sourceMappingURL=dm.js.map