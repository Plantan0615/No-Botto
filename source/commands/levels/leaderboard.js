const discord = require("discord.js");
const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
module.exports.run = async(client, message, args) => {
    let prepareStatement = sql.prepare(`SELECT userID, username, userXP, RANK() OVER ( ORDER BY userXP DESC ) Rank FROM data`);
    let guildObject =prepareStatement.all();
    let leaderArray = guildObject.map(Object.values);
    function getInfo(item){
        var info = [item.username, item.userXP]
        return info
    }
    var modArray = guildObject.map(getInfo)
//embeds
//
//top 10
const leaderEmbed = new discord.MessageEmbed()
.setTitle("XP Leaderboard")
.setDescription("Top 10:")
.setColor("BLURPLE")
.addFields(
    {name: "1", value: modArray [0], inline: true},
    {name: "2", value: modArray [1], inline: true},
    {name: "3", value: modArray [2], inline: true},
    {name: "4", value: modArray [3], inline: true},
    {name: "5", value: modArray [4], inline: true},
    {name: "6", value: modArray [5], inline: true},
    {name: "7", value: modArray [6], inline: true},
    {name: "8", value: modArray [7], inline: true},
    {name: "9", value: modArray [8], inline: true},
    {name: "10", value: modArray [9], inline: true}
);
//top 20
const secondEmbed = new discord.MessageEmbed()
.setTitle("XP Leaderboard")
.setDescription("Top 20:")
.setColor("BLURPLE")
.addFields(
    {name: "11", value: modArray [10], inline: true},
    {name: "12", value: modArray [11], inline: true},
    {name: "13", value: modArray [12], inline: true},
    {name: "14", value: modArray [13], inline: true},
    {name: "15", value: modArray [14], inline: true},
    {name: "16", value: modArray [15], inline: true},
    {name: "17", value: modArray [16], inline: true},
    {name: "18", value: modArray [17], inline: true},
    {name: "19", value: modArray [18], inline: true},
    {name: "20", value: modArray [19], inline: true}
);
//top 30
const thirdEmbed = new discord.MessageEmbed()
.setTitle("XP Leaderboard")
.setDescription("Top 30:")
.setColor("BLURPLE")
.addFields(
    {name: "21", value: modArray [20], inline: true},
    {name: "22", value: modArray [21], inline: true},
    {name: "23", value: modArray [22], inline: true},
    {name: "24", value: modArray [23], inline: true},
    {name: "25", value: modArray [24], inline: true},
    {name: "26", value: modArray [25], inline: true},
    {name: "27", value: modArray [26], inline: true},
    {name: "28", value: modArray [27], inline: true},
    {name: "29", value: modArray [28], inline: true},
    {name: "30", value: modArray [29], inline: true}
);
//send embed based on index
let user = leaderArray[0].filter(v => v.userID = message.author.id)
let userRank = user[3]
if (userRank <= 9) {message.channel.send(leaderEmbed);}
else if (userRank >= 10 && userRank <= 19) {message.channel.send(secondEmbed);}
else if (userRank >= 20 && userRank <= 29) {message.channel.send(thirdEmbed);}
}