//Flips a coin that takes 1,3s 
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
    const msg = yield message.channel.send("Flipping a coin...");
    var replies = ["tails", "heads"];
    var reply = replies[Math.floor(Math.random())];
    setTimeout(function () {
        msg.edit(`You got ${reply}, ${message.author.toString()}!`);
    }, 1337);
});
module.exports.help = {
    name: "coinflip",
    description: "Flip a coin!"
};
//# sourceMappingURL=coinflip.js.map