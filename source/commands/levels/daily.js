const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const talkedRecently = new Set();
module.exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Wait until tomorrow before getting typing this again ${message.author.username}.`);
}
    else{
        let userID = message.author.id
        let prepareStatement = sql.prepare("SELECT * FROM data WHERE userID = ?")
        let userXpObject= prepareStatement.get(`${userID}`)
                let currentMoneys = userXpObject["userMoneys"];
                let newMoneys = 200
                let finalMoneys = currentMoneys + newMoneys;
                    let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                    prepareUpdate.run(finalMoneys, userID)
                    message.channel.send("Daily Complete. Have 200 Moneys.")
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id);}, 86400000);
}
}