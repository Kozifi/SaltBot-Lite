//Sends a random reverse card. Remember to fix the file paths if neccessary

module.exports.run = async (bot, message, args) => {
    var replies = [
        { files: ['./files/reverse/yellow.png'] },
        { files: ['./files/reverse/red.png'] },
        { files: ['./files/reverse/blue.png'] }];
    var reply = replies[Math.floor(Math.random() * replies.length)];
    message.channel.send(reply);
    message.delete();
}

module.exports.help = {
    name: "reverse"
}