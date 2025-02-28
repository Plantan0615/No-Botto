const { GuildMember, Role } = require("discord.js")
const discord = require("discord.js")
module.exports.run = async(client, message, args) => {
//get the 2 roles
let { cache } = message.guild.roles;
let role = cache.find(role => role.name === "I Need to Read the Rules");
let newRole = cache.find(role => role.name === "Noobz");
//user input
    let passwordGuess = message.content.substring(10);
    const password = "PxTc"
//if no password guess
if(!passwordGuess){
    message.delete();
    message.channel.send("You need to enter a password guess.")
    .then(msg => msg.delete({timeout: 2000}))
    .catch(err => console.log(err));
    return;
}
//if the rules role exists
if(role) {
    //if user doesn't have the role
    if(!message.member.roles.cache.has(role.id)) {
        message.delete();
        message.channel.send("You have already read the rules")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
        return;
    }
//if user has the role
 else if(message.member.roles.cache.has(role.id)) {
     //if password is wrong
    if (passwordGuess !== password) {
        message.delete();
        message.channel.send("Incorrect Password, Try Again")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
        return;
    }
    //if password is right
    else if (passwordGuess === password) {
        message.member.roles.add(newRole);
        message.member.roles.remove(role);
        message.delete();
        const rulesEmbed = new discord.MessageEmbed()
        .setTitle("Thanks for reading the rules!")
        .setDescription(`${message.author.username} You have added the Noobz role, removed the Rules role, and Unlocked the Channels.`)
        .setColor("#17ff00")
        message.channel.send(rulesEmbed);
    }
    }
}
}