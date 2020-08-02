//Flips a coin that takes 1,3s 

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send("Flipping a coin...");
    var replies = ["tails", "heads"]
    var reply = replies[Math.floor(Math.random())];
    setTimeout(function () {
        msg.edit(`You got ${reply}, ${message.author.toString()}!`);
    }, 1337);
}

module.exports.help = {
    name: "coinflip",
    description: "Flip a coin!"
}