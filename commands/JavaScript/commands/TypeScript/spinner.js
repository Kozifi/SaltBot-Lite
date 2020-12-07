//Lets the user spin a fidget spinner for 0-79s. After the time is out, it will be sent in the chat
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
    let coloru = args.join(" ");
    let color = coloru.toLowerCase();
    var time = Math.floor(Math.random() * 79);
    var timems = time * 1000;
    const defaultcolor = yield message.channel.send("**" + message.member.displayName + "** spun their fidget spinner! <a:spinner:541714403687661588> Lets see how long it will spin for...");
    setTimeout(function () {
        defaultcolor.edit("**" + message.member.displayName + "** spun their fidget spinner for " + time + " seconds! <:spinnerorange:543436284719529984>🏆");
    }, timems);
});
module.exports.help = {
    name: "spinner",
    description: "Spin a fidget spinner! Yup."
};
//# sourceMappingURL=spinner.js.map