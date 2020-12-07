//Starts a battle between two users. Check the example, can't bother to explain here.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Jimp = require('jimp');
var fs = require('fs');
var uuid = require("uuid");
var crypto = require('crypto');
var isImageUrl = require('is-image-url');
var Discord = require('discord.js');
var config = require("../config.json");
module.exports.run = (bot, message, args) => __awaiter(this, void 0, void 0, function* () {
    let sourceimg = './files/deathbattle bg.png';
    let overlay = './files/deathbattle overlay.png';
    let finalimg = `./editedfiles/battle ${crypto.randomBytes(2).toString('hex')}.png`;
    let user1name = "x";
    let user1;
    if (!args[0]) //cancel if no args
     {
        message.channel.send("You need to challenge someone!\n**-fight <user1> [user2]**");
        return;
    }
    if (args[1]) {
        user1 = bot.users.get(getID(args[1])).displayAvatarURL;
        user1name = bot.users.get(getID(args[1])).username;
    }
    else {
        user1 = message.author.displayAvatarURL;
        user1name = message.author.username;
    }
    let user2 = bot.users.get(getID(args[0])).displayAvatarURL;
    let user2name = bot.users.get(getID(args[0])).username;
    if (getID(args[0]) == message.author.id && !args[1])
        message.channel.send('Hmmm, alright then.');
    //Check if the input link is an image
    if (isImageUrl(user1) && isImageUrl(user2)) {
        let status = yield message.channel.send('Starting fight...');
        //Load both files, resize input to the correct size, then add it to the source
        Jimp.read(sourceimg).then(function (sourceimage) {
            Jimp.read(user1).then(function (user1) {
                Jimp.read(user2).then(function (user2) {
                    Jimp.read(overlay).then(function (overlay) {
                        user1.resize(542, 542);
                        user2.resize(542, 542);
                        sourceimage.composite(user1, 139, 315);
                        sourceimage.composite(user2, 695, 315);
                        sourceimage.composite(overlay, 0, 0);
                        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(font => {
                            sourceimage.print(font, 252, 882, `${user1name}`);
                            sourceimage.print(font, 816, 882, `${user2name}`);
                            sourceimage.write(finalimg);
                            message.channel.send({ files: [finalimg] });
                            setTimeout(function () {
                                StartBattle(message, user1name, user2name, user1, user2, bot);
                            }, 1000);
                        });
                    });
                });
            });
        });
        //Error message if the link isn't a message
    }
    else
        message.channel.send("I can't find avatars from the users you want to fight. This is awkward");
});
function getID(mention) {
    return mention.replace("<@!", "").replace(">", "");
}
function StartBattle(message, user1name, user2name, user1, user2, bot) {
    return __awaiter(this, void 0, void 0, function* () {
        let winsourceimg = './files/winner base.png';
        let winoverlay = './files/winner overlay.png';
        let winfinalimg = `./editedfiles/winbattle ${crypto.randomBytes(2).toString('hex')}.png`;
        var blank = '‎'; //blank symbol
        var attacks = [
            ["throws salt at @, but that only made them stronger!", "+@ hp", 2, 5],
            ["snaps their infinity gauntlet, ouch!", "@ hp", -50, -30],
            ["karate kicks @, which makes them fall on the ground!", "@ hp", -30, -23],
            ["tries to play the piano. @ is in pain", "@ hp", -22, -27],
            ["attacks @ with their new diamond sword, but doesn't even get a crit", "@ hp", -8, -18],
            ["attacks @ with their new diamond sword. CRITIAL HIT!", "@ hp", -25, -18],
            ["calls Diego Bless which blasts his VYBEZ on @", "@ hp", -20, -30],
            ["does a Fortnite dance. @ can't stand it", "@ hp", -25, -15],
            ["finds a suspicious potion and throws it at @, but it turns out it was healthy!", "+@ hp", 6, 8],
            [`invites @ to join ${message.guild.name}, they are now scared for life`, "@ hp", -20, -15],
            [`does the epic dab. @ gets disgusted`, "@ hp", -20, -15],
            [`runs over @ with Thanos car. Now THAT hurt!`, "@ hp", -50, -30],
            [`tells @ that cat girls doesn't exist.`, "@ hp", -30, -17],
            [`tries to rick roll @, but they are a big fan of Rick Astley!`, "+@ hp", 5, 8],
            [`makes a Jojo reference, @ isn't sure what to say`, "@ hp", -23, -15],
            [`reports @ to PETA. While running away from them, @ fell`, "@ hp", -20, -15],
            [`sings Despacito, but @ actually likes their voice, whoops!`, "+@ hp", 7, 10],
            [`asks @ to divide by 0. Their calculator explodes`, "@ hp", -30, 20]
        ];
        var self = [
            ["eats a bread and heal themselves.", "+@ hp", 5, 7],
            ["puts on a band aid.", "+@ hp", 5, 15],
            ["eats some salt. Don't do that! ", "@ hp", -13, -8],
            ["finds a potion and drinks it. It tastes good!", "+@ hp", 5, 12],
            ["listens to some sea shanties, that's some good stuff!", "+@ hp", 5, 8],
            ["eats an obango. How could they?", "@ hp", -5, 0],
            ["tries to run away and heal, but slips on a rock!", "@ hp", -7, -2],
            ["finds a potion and consumes it. Not the best idea..", "@ hp", -15, -8],
            ["didn't hear the creeper because they had AirPods in. Hm", "@ hp", -30, -20],
            [`asks ${bot.user.username} for help, but I refused.`, "@ hp", -11, -9],
            [`looks at @'s search history. Can't be unseen`, "@ hp", -30, -27],
            [`bikes away, but @ knocks them off. Nothing that a band aid won't fix`, "@ hp", -10, -15]
        ];
        let user1HP = 100;
        let user2HP = 100;
        let turn = true;
        let died = false;
        let done = false;
        if (Math.random() >= 0.5)
            turn = false;
        const fightembed = new Discord.RichEmbed()
            .setColor('#B01828')
            .setAuthor('Fight to the death!', message.author.displayAvatarURL)
            .setDescription(`🍉 ${user1name}: ${user1HP}\n🍍 ${user2name}: ${user2HP} HP||\n\n||`);
        let sentmsg = yield message.channel.send(fightembed);
        for (var i = 0; i < 20; i++) {
            setTimeout(function () {
                if (Math.random() >= 0.3) //attack
                 {
                    if (turn) //attack true == user 1 attacks, user 2 changes
                     {
                        turn = false;
                        let a = attacks[rdn(0, attacks.length - 1)]; //decides attack
                        let dmg = rdn(a[2], a[3]); //decides damage
                        fightembed.addField(`**${user1name}** ${a[0].replace("@", `**${user2name}**`)}`, a[1].replace("@", dmg.toString()) + " 🍍"); //Adds fight message - X DOES Y, Y AFFECT
                        user2HP = user2HP + dmg; //Updates actual HP
                        if (user2HP < 0)
                            user2HP = 0;
                        fightembed.setDescription(`🍉 ${user1name}: ${user1HP.toString()}\n🍍 ${user2name}: ${user2HP.toString()} HP\n${blank}`); //Updates HP text
                        if (!died)
                            sentmsg.edit(fightembed);
                    }
                    else //attack false == user 2 attacks, user 1 changes
                     {
                        turn = true;
                        let a = attacks[rdn(0, attacks.length - 1)];
                        let dmg = rdn(a[2], a[3]);
                        fightembed.addField(`**${user2name}** ${a[0].replace("@", `**${user1name}**`)}`, a[1].replace("@", dmg.toString()) + " 🍉");
                        user1HP = user1HP + dmg;
                        if (user1HP < 0)
                            user1HP = 0;
                        fightembed.setDescription(`🍉 ${user1name}: ${user1HP.toString()}\n🍍 ${user2name}: ${user2HP.toString()} HP\n${blank}`);
                        if (!died)
                            sentmsg.edit(fightembed);
                    }
                }
                else //buff
                 {
                    if (turn) {
                        turn = false;
                        let a = self[rdn(0, self.length - 1)]; //decides attack
                        let dmg = rdn(a[2], a[3]); //decides damage
                        fightembed.addField(`**${user1name}** ${a[0].replace("@", `**${user2name}**`)}`, a[1].replace("@", dmg.toString()) + " 🍉"); //Adds fight message - X DOES Y, Y AFFECT
                        user1HP = user1HP + dmg; //Updates actual HP
                        if (user1HP < 0)
                            user1HP = 0;
                        fightembed.setDescription(`🍉 ${user1name}: ${user1HP.toString()}\n🍍 ${user2name}: ${user2HP.toString()} HP\n${blank}`); //Updates HP text
                        if (!died)
                            sentmsg.edit(fightembed);
                    }
                    else {
                        turn = true;
                        let a = self[rdn(0, self.length - 1)];
                        let dmg = rdn(a[2], a[3]);
                        fightembed.addField(`**${user2name}** ${a[0].replace("@", `**${user1name}**`)}`, a[1].replace("@", dmg.toString()) + " 🍍");
                        user2HP = user2HP + dmg;
                        if (user2HP < 0)
                            user2HP = 0;
                        fightembed.setDescription(`🍉 ${user1name}: ${user1HP.toString()}\n🍍 ${user2name}: ${user2HP.toString()} HP\n${blank}`);
                        if (!died)
                            sentmsg.edit(fightembed);
                    }
                }
                if (user1HP < 1 || user2HP < 1) {
                    died = true;
                    fightembed.addBlankField(true);
                    //winner stats
                    let w = [user1name, "🍉", user1HP.toString(), user1];
                    if (user1HP == 0)
                        w = [user2name, "🍍", user2HP.toString(), user2];
                    if (!done) {
                        fightembed.addField(`${w[1]}🏆 :regional_indicator_v: :regional_indicator_i: :regional_indicator_c: :regional_indicator_t: :regional_indicator_o: :regional_indicator_r: :regional_indicator_y: 🏆${w[1]}`, `With ${w[2]} hp left, ${w[0]} is the winner!`);
                        sentmsg.edit(fightembed);
                        //create pic
                        Jimp.read(winsourceimg).then(function (sourceimage) {
                            Jimp.read(user1).then(function () {
                                Jimp.read(user2).then(function () {
                                    Jimp.read(winoverlay).then(function (winoverlay) {
                                        w[3].resize(542, 542);
                                        sourceimage.composite(w[3], 436, 315);
                                        sourceimage.composite(winoverlay, 0, 0);
                                        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(font => {
                                            sourceimage.print(font, 542, 880, w[0]);
                                            sourceimage.write(winfinalimg);
                                            message.channel.send({ files: [winfinalimg] });
                                        });
                                    });
                                });
                            });
                        });
                    }
                    done = true;
                }
            }, 2900 * i);
        }
        sentmsg.edit(fightembed);
    });
}
function rdn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports.help = {
    name: "fight"
};
//# sourceMappingURL=fight.js.map