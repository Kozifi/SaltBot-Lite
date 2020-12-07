//Set the botstatus (online, idle, dnd, offline)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    let text = args.join(" ");
    if (text == "online") {
        bot.user.setStatus('avaliable');
    }
    else if (text == "offline") {
        bot.user.setStatus('invisible');
    }
    else if (text == "idle") {
        bot.user.setStatus('idle');
    }
    else if (text == "dnd") {
        bot.user.setStatus('dnd');
    }
    else {
        message.channel.send(`${text} doesn't seem to be a valid status :thinking:`);
    }
});
module.exports.help = {
    name: "setstatus"
};
//# sourceMappingURL=setstatus.js.map