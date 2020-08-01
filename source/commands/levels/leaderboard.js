const discord = require("discord.js");
const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
module.exports.run = async(client, message, args) => {
    let guildID = message.guild.id
    let userID = message.author.id
    let prepareStatement = sql.prepare("SELECT * FROM data WHERE userID = ?")
    let guildXpObject= prepareStatement.get(`${guildID}`)
    let userxpObject = prepareStatement.get(`${userID}`)



//                     let currentXp = guildXpObject["userXP"];//1 userXP
//                     let username = guildXpObject["username"];//1 username
//                     var userObject = {currentXp, username}
//         console.log(userObject);


    
 //send leaderboard array in embed
    const leaderEmbed = new discord.MessageEmbed()
    .setTitle("Leaderboard")
    .setDescription("PXTC XP Leaderboard")
    .setColor("BLURPLE")
    .addField("Rankings:", leaderArray);

    message.delete();
    message.reply(leaderEmbed);
 }