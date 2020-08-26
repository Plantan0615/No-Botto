const talkedRecently = new Set();
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Wait until tomorrow before getting typing this again ${message.author.username}.`);
}
    else{
        let userID = message.author.id
        let prepareStatement = client.sql.prepare("SELECT * FROM data WHERE userID = ? AND guildID = ?")
        let userXpObject= prepareStatement.get(`${userID}`, `${message.guild.id}`)
                let currentMoneys = userXpObject["userMoneys"];
                let newMoneys = 200
                let finalMoneys = currentMoneys + newMoneys;
                    let prepareUpdate = client.sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ? AND guildID = ?`)
                    prepareUpdate.run(finalMoneys, userID, message.guild.id)
                    dailyEmbed = new discord.MessageEmbed()
                    .setTitle("Daily Complete. Have 200 Moneys.")
                    .setColor('#46693a')
                    message.channel.send(dailyEmbed)
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id);}, 86400000);
}
}
module.exports.help = {
    name: "daily",
    category: "economy",
    usage: `Template/Example: PREFIXdaily`,
    description: "Type this once a day to earn 200 Moneys."
}
module.exports.h2p = {
        instructions: [
        { name: "How to Earn XP/Level Up", value: "Simply by talking! You will level up once you reach a certain amount of XP. Once you have reached a certain level, you will get a new Level Role. Type '~help levels' for more info."},
        { name: "How to Earn Moneys", value: "You can earn moneys by talking, and using the daily command!"},
        { name: "Note", value: "Only non-command messages count towards XP, Levels, and Moneys."},
        { name: "IMPORTANT NOTE", value: "Database (db) commands cannot be used before a user has sent a message that is not a command. If a user attempts to use one of these commands before they have sent a non-command message, it simply will not work."},
        { name: "Database Commands", value: "Fun db Commands: dice, roulette. Useful db Commands: mywarnings. Economy db Commands: daily, leaderboard, rank, stats."},
        {name: "Examples", value: "Type '~help economy usage' for examples of what you need to type for all economy commands"}
    ]
}