//Sends a random reverse card. Remember to fix the file paths if neccessary
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
    var replies = [
        { files: ['./files/reverse/yellow.png'] },
        { files: ['./files/reverse/red.png'] },
        { files: ['./files/reverse/blue.png'] }
    ];
    var reply = replies[Math.floor(Math.random() * replies.length)];
    message.channel.send(reply);
    message.delete();
});
module.exports.help = {
    name: "reverse"
};
//# sourceMappingURL=reverse.js.map