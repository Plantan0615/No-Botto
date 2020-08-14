const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You cannot kick people.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    let msgArray = message.content.substring(6).split (", ")
    let userID = msgArray[0]
    let reason = msgArray[1]

        let member = message.guild.members.cache.get(`${userID}`);
        const kickEmbed = new discord.MessageEmbed()
        .setTitle(`${member.user.username} has been Kicked!`)
        .setDescription(`Reason: ${reason}`)
        .setColor("#831313")
    if (!userID){
        message.channel.send("You must provide a userID").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    if (!member.kickable) {
        message.channel.send("I cannot kick this user.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    if (!reason){
        message.channel.send("You must provide a reason").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    else {
        await member.kick(reason).catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.channel.send(kickEmbed)
    }
}