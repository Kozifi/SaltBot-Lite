//Will let the user "flip a bottle" and give the user a 20% to succeed. If succeeding, the user will get a random score from 0-10.
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
    const bottleflip = yield message.channel.send("**" + message.member.displayName + "** is flipping their bottle...");
    var chance = Math.random();
    if (chance > 0.8)
        setTimeout(function () {
            bottleflip.edit("**" + message.member.displayName + "** failed the bottle flip! :(");
        }, 1500);
    else
        setTimeout(function () {
            bottleflip.edit("Victory royale **" + message.member.displayName + "**! You hit the bottle flip! Calculating your score...");
            var score = Math.floor(Math.random() * 11);
            setTimeout(function () {
                if (score <= 0) {
                    message.channel.send("Your score is 0/10 **" + message.member.displayName + "**. I'm disappointed in you :(");
                }
                else if (score == 1 || score == 2) {
                    message.channel.send("Aww, your score is only " + score + "/10, **" + message.member.displayName + "**. Better luck next time :(");
                }
                else if (score == 4 || score == 3) {
                    message.channel.send("You got  " + score + "/10, **" + message.member.displayName + "**. That's ok I guess");
                }
                else if (score == 5 || score == 6) {
                    message.channel.send("Your score is " + score + "/10, **" + message.member.displayName + "**. You can definitely improve!");
                }
                else if (score >= 7 && score <= 9) {
                    message.channel.send("Your score is " + score + "/10, **" + message.member.displayName + "**! Good job!");
                }
                else if (score >= 10) {
                    message.channel.send("Damn **" + message.member.displayName + "**! You got 10/10, awesome!");
                }
            }, 2500);
        }, 2000);
});
module.exports.help = {
    name: "bottleflip",
    description: "Flip a bottle!"
};
//# sourceMappingURL=bottleflip.js.map