const discord = require("discord.js");
const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
module.exports.run = async(client, message, args) => {
let prepareStatement = sql.prepare("SELECT username, userXP FROM data ORDER BY userXP DESC")
let userXpObject = prepareStatement.all()
let leaderArray = userXpObject.map(Object.values);
//send leaderboard array in embed
    const leaderEmbed = new discord.MessageEmbed()
    .setTitle("XP Leaderboard")
    .setDescription("Top 10:")
    .setColor("#c3e00f")
    .addFields(
        {name: "1", value: leaderArray [0], inline: true},
        {name: "2", value: leaderArray [1], inline: true},
        {name: "3", value: leaderArray [2], inline: true},
        {name: "4", value: leaderArray [3], inline: true},
        {name: "5", value: leaderArray [4], inline: true},
        {name: "6", value: leaderArray [5], inline: true},
        {name: "7", value: leaderArray [6], inline: true},
        {name: "8", value: leaderArray [7], inline: true},
        {name: "9", value: leaderArray [8], inline: true},
        {name: "10", value: leaderArray [9], inline: true}
    );
    message.channel.send(leaderEmbed);
 }