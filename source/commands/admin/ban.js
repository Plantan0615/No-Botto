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
        await member.ban(reason).catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.channel.send(banEmbed)
    }
}