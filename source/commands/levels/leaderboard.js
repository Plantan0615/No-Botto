// module.exports.run = async(client, message, args) => {
//     const discord = require("discord.js");
//     const messages= require("/Users/chase/Desktop/Coding/No Botto/source/userXP.json");
//     const fs = require("fs").promises;

//     let xpFile = await fs.readFile("userXP.json", "utf8");
//         let xpObject = JSON.parse(xpFile);//entire json file
//             let userXpObject = xpObject[message.author.id];//1 user
//                 let guildXpObject = userXpObject[message.guild.id];//1 user within guild
//                     let currentXp = guildXpObject["userXP"];//1 userXP
//                     let username = guildXpObject["username"];//1 username
//                     var userObject = {currentXp, username}
//         console.log(userObject);

    // let leaderArray = Object.entries()
    // .map(v => `${v[1].} - ${v[1].}`)
    // .sort((a, b) => b.split(" - ")[0] - a.split(" - ")[0]);
    // console.log(leaderArray);
    
//  //send leaderboard array in embed
//     const leaderEmbed = new discord.MessageEmbed()
//     .setTitle("Leaderboard")
//     .setDescription("PXTC XP Leaderboard")
//     .setColor("BLURPLE")
//     .addField("Rankings:", leaderArray);

//     message.delete();
//     message.reply(leaderEmbed);
//  }