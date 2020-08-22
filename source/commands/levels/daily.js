const talkedRecently = new Set();
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
                    message.channel.send("Daily Complete. Have 200 Moneys.")
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