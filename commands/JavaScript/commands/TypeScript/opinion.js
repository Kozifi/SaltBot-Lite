var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Sends a random opinion
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    var replies = [
        "Yes",
        "Sure!",
        "No.",
        "Nahh",
        "Yes :D",
        "No :c",
        "Yes!",
        "Yes",
        "No!",
        "Hell nah",
        "Hell yeah!",
        "How am I supposed to know?",
        "Uhh, I guess?",
        "Uhh, I don't think so",
        "I have no idea.",
        "I have no clue",
        "Why does it matter?",
        "Yeah",
        "Yea",
        "yup",
        "nah",
        "Of course!",
        "Hell yeah!",
        "Hell no"
    ];
    var reply = replies[Math.floor(Math.random() * replies.length)];
    message.channel.send(reply);
});
module.exports.help = {
    name: "opinion"
};
//# sourceMappingURL=opinion.js.map