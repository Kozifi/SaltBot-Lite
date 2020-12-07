//Shows some bot stats. Note that the bot will not have the custom emotes here.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var { version: komadaVersion } = require("komada");
var moment = require("moment");
require("moment-duration-format");
var { version: discordVersion } = require("discord.js");
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    message.channel.send(`
    <:salt2:547137417568845825> STATS <:salt2:547137417568845825>

👤 **Total users**: ${bot.users.size}
👥 **Total servers**: ${bot.guilds.size}
🗨 **Total channels**: ${bot.channels.size.toLocaleString()}

<:ram:548956023688527884> **RAM usage**: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
🕓 **Uptime**: ${duration}

<:discord:548956025156403220> **Discord.js version**: v${discordVersion}
<:nodejs:548956023034085396> **Node.js**: ${process.version}
<:komada:548956023096999940> **Komada version**: v${komadaVersion}
`);
});
module.exports.help = {
    name: "stats"
};
//# sourceMappingURL=stats.js.map