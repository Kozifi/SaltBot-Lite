//Sends your own or a mentioned users profile picture. Will send a status message that will get deleted when the picture is sent.
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
    let msg = yield message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;
    yield message.channel.send({
        files: [
            {
                attachment: target.displayAvatarURL,
                name: "avatar.png"
            }
        ]
    });
    msg.delete();
});
module.exports.help = {
    name: "avatar",
    description: "Sends your own or a mentioned users profile picture."
};
//# sourceMappingURL=avatar.js.map