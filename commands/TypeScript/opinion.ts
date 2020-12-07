//Sends a random opinion
module.exports.run = async (bot, message, args) => {
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
        "Hell no"];
    var reply = replies[Math.floor(Math.random() * replies.length)];
    message.channel.send(reply);
}
module.exports.help = {
    name: "opinion"
}