const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You cannot ban people.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    let msgArray = message.content.substring(5).split (", ")
    let userID = msgArray[0]
    let reason = msgArray[1]

        let member = message.guild.members.cache.get(`${userID}`);
        const banEmbed = new discord.MessageEmbed()
        .setTitle(`${member.user.username} has been Banned!`)
        .setDescription(`Reason: ${reason}`)
        .setColor("#831313")
    if (!userID){
        message.channel.send("You must provide a userID.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    if (!member.bannable) {
        message.channel.send("I cannot ban this user.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    if (!reason){
        message.channel.send("You must provide a reason.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    else {
        await member.ban({reason: `${reason}`}).catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.channel.send(banEmbed)
    }
}

module.exports.help = {
    name: "ban",
    category: "admin",
    usage: `Template: PREFIXban userID, reason\nExample: PREFIXban 735157583010332723, because (the user ID is my alt acct)`,
    description: "For banning members. Type the command followed by the userID and the reason for the ban (MUST BE Separated with a comma)."
}

module.exports.h2p = {
    instructions: [
        { name: "IMPORTANT NOTE", value: "Database (db) commands cannot be used before a user has sent a message that is not a command. If a user attempts to use one of these commands, or if a command is applied to a user before they have sent a non-command message it simply will not work."},
        { name: "Database Commands", value: "Fun db Commands: dice, roulette. Useful db Commands: mywarnings. Economy db Commands: daily, leaderboard, rank, stats. Admin db Commands: userwarns, warn."},
        {name: "Examples", value: "Type '~help admin usage' for examples of what you need to type for all admin commands"}
]

}