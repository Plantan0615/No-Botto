const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const { MessageEmbed } = require("discord.js");
const fs = require("fs").promises;
module.exports.run = async(client, message, args) => {
    let userID = message.author.id
    let prepareStatement = sql.prepare("SELECT * FROM data WHERE userID = ?")
    let userXpObject= prepareStatement.get(`${userID}`)
                let username = userXpObject["username"];
                let currentXp = userXpObject["userXP"];
                let currentMoneys = userXpObject["userMoneys"];
                let currentLevel = userXpObject["userLevel"];
                const statsEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle('Stats')
                .setDescription(`User Stats for ${message.author.username}`)
                .addFields(
                    { name: "Username", value: username},
                    { name: "XP", value: currentXp},
                    { name: "Level", value: currentLevel},
                    { name: "Moneys", value: currentMoneys}
                );
            message.channel.send(statsEmbed);
}

