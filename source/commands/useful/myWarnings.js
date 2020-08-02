const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
let username = message.author.username
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