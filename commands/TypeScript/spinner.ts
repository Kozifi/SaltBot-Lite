//Lets the user spin a fidget spinner for 0-79s. After the time is out, it will be sent in the chat

module.exports.run = async (bot, message, args) => {
    let coloru = args.join(" ");
    let color = coloru.toLowerCase();
    var time = Math.floor(Math.random() * 79); 
    var timems = time * 1000;                   

    const defaultcolor = await message.channel.send("**" + message.member.displayName + "** spun their fidget spinner! <a:spinner:541714403687661588> Lets see how long it will spin for...");
    setTimeout(function () {
        defaultcolor.edit("**" + message.member.displayName + "** spun their fidget spinner for " + time + " seconds! <:spinnerorange:543436284719529984>🏆");
    }, timems);
}
 

module.exports.help = {
    name: "spinner",
    description: "Spin a fidget spinner! Yup."
}