const { GuildMember, Role } = require("discord.js")
const discord = require("discord.js")
module.exports.run = async(client, message, args) => {
let { cache } = message.guild.roles;
let role = cache.find(role => role.name === "I Need to Read the Rules");
let passwordGuess = message.content.substring(10);
//
//change password to PxTc
//
const password = "meow" 
let newRole = cache.find(role => role.name === "Noobz");
if(!passwordGuess){
    message.delete();
    message.channel.send("You need to enter a password guess.")
    .then(msg => msg.delete({timeout: 2000}))
    .catch(err => console.log(err));
    return;
}
if(role) {
    if(!message.member.roles.cache.has(role.id)) {
        message.delete();
        message.channel.send("You have already read the rules")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
        return;
    }
 else if(message.member.roles.cache.has(role.id)) {
    if (passwordGuess !== password) {
        message.delete();
        message.channel.send("Incorrect Password, Try Again")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
        return;
    }
    else if (passwordGuess === password) {
        message.member.roles.add(newRole);
        message.member.roles.remove(role);
        message.delete();
        const rulesEmbed = new discord.MessageEmbed()
        .setTitle("Thanks for reading the rules!")
        .setDescription(`${message.author.username} You have added the Noobz role, removed the Rules role, and Unlocked the Channels.`)
        .setColor("GREEN")
        message.channel.send(rulesEmbed);
    }
}
}
}