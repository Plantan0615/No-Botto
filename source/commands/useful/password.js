const { GuildMember, Role } = require("discord.js")

module.exports.run = async(client, message, args) => {
let { cache } = message.guild.roles;
let role = cache.find(role => role.name === "I Need to Read the Rules");
let passwordGuess = message.content.substring(10);
const password = "meow"
let newRole = cache.find(role => role.name === "Noobz");
if(role) {
    if(!message.member.roles.cache.has(role.id)) {
        message.delete();
        message.channel.send("You have already read the rules");
        return;
    }
 else if(message.member.roles.cache.has(role.id)) {
    if (passwordGuess !== password) {
        message.delete();
        message.channel.send("Incorrect Password, Try Again");
    }
    else if (passwordGuess === password) {
        message.member.roles.add(newRole);
        message.member.roles.remove(role);
        message.delete();
        message.channel.send("Thanks for reading the rules! You have added the Noobz role, removed the Rules role, and Unlocked the Channels.");
    }
}
}
}