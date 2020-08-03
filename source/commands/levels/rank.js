const discord = require("discord.js");
const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
module.exports.run = async(client, message, args) => {
    let prepareStatement = sql.prepare(`SELECT userID, username, userXP, RANK() OVER ( ORDER BY userXP DESC ) Rank FROM data`);
    let guildObject =prepareStatement.all();
    let leaderArray = guildObject.map(Object.values);
    let user = leaderArray[0].filter(v => v.userID = message.author.id)
    let userRank = user[3]
//send embed
    const rankEmbed = new discord.MessageEmbed()
    .setTitle(`Ranking for ${message.author.username}`)
    .setDescription(`You are ranked number ${userRank} in this server.`)
    .setColor('#18a7b4');

    message.channel.send(rankEmbed);
}