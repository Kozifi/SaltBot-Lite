//Lets the user challenge someone to a fidget spinner battle. Note that the bot will not have the custom emotes here.

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    var time = Math.floor(Math.random() * 63);  //author
    var timems = time * 1000;                 
    var time2 = Math.floor(Math.random() * 63); //challenged
    var timems2 = time2 * 1000;                    

    if (member == message.member) {
        message.channel.send("You can't challenge yourself to a duel " + message.member + " :(")
    } else if (time > time2) {
        //start message
        message.channel.send("**" + message.member.displayName + "** and **" + member.displayName + "** spun their fidget spinners! <a:spinner:541714403687661588> Lets see which one spins the longest!");
        setTimeout(function () {
            //challenged stopped
            message.channel.send("**" + member.displayName + "** spun their fidget spinner for " + time2 + " seconds! <:bluespinner:543436284375597057>🥈");
        }, timems2);
        setTimeout(function () {
            //author won
            message.channel.send("**" + message.member.displayName + "** spun their fidget spinner for " + time + " seconds which makes them the winner! 🥇 <:spinnerred:543436284522397716>");
        }, timems);
    } else if (time2 > time) {
        //start message
        message.channel.send("**" + message.member.displayName + "** and **" + member.displayName + "** spun their fidget spinners! <a:spinner:541714403687661588> Lets see which one spins the longest!");
        setTimeout(function () {
            //author stopped
            message.channel.send("**" + message.member.displayName + "** spun their fidget spinner for " + time + " seconds! <:spinneryellow:543436284740370462>🥈");
        }, timems);
        setTimeout(function () {
            //challenged won
            message.channel.send("**" + member.displayName + "** spun their fidget spinner for " + time2 + " seconds which makes them the winner! 🥇 <:greenspinner:543436284811542538> ");
        }, timems2);
    } else if (time2 == time) {
        setTimeout(function () {
            //draw
            message.channel.send("**DRAW!** Both the fidget spinners stopped at " + time + " seconds! <:pinkspinner:543436285143154688> ");
        }, timems2);
    }
}

module.exports.help = {
    name: "spinnerduel"
}