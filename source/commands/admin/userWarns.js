const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot check other people's warnings.");
let username = message.content.substring(11)
    let prepareStatement = sql.prepare("SELECT warnNum, warnReason FROM data WHERE username = ?")
    let userObject= prepareStatement.get(`${username}`)
        let warnReas = userObject["warnReason"]
        let warnAmt = userObject["warnNum"]
    const warnEmbed = new discord.MessageEmbed()
    .setTitle("Warnings")
    .setDescription(`Warnings for ${username}`)
    .setColor("RED")
    .addFields(
        {name: "Amount of Warnings:", value: warnAmt},
        {name: "Reasons for Warnings:", value: warnReas}
    )
        message.channel.send(warnEmbed);
}