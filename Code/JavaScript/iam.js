//Creates a webhook and pretends to be another user
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
    let target = bot.users.get(args.slice(0, 1).join(" "));
    let text = args.slice(1).join(" ");
    if (!text) {
        message.channel.send("Uhh, I'm not sure what you want me to send, " + message.author.toString() + ". Maybe give me some args? -iam <userid> <text>");
    }
    else {
        try {
            var webhooks = yield message.channel.fetchWebhooks();
            var webhook = webhooks.first();
            if (webhooks.size == 0) {
                webhook = message.channel.createWebhook("User from SaltBot", "https://i.imgur.com/lxNySwN.png");
            }
            message.delete();
            yield webhook.send(text, {
                username: target.username,
                avatarURL: target.displayAvatarURL,
            });
        }
        catch (error) {
            console.error('Error trying to send: ', error);
        }
    }
});
module.exports.help = {
    name: "iam",
    description: "Why be yourself when you have the option not to?"
};
//# sourceMappingURL=iam.js.map