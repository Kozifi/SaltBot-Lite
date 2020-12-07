//Sets the bot play status
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
    let gamestatus = args.join(" ");
    bot.user.setActivity(config.status);
    message.channel.send("Game status changed to **" + gamestatus + "**");
});
module.exports.help = {
    name: "setgame"
};
//# sourceMappingURL=setgame.js.map