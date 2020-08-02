const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot warn people.");
    let msgArray = message.content.substring(6).split (", ")
    let username = msgArray[0]
    let reason = msgArray[1]
        let prepareStatement = sql.prepare("SELECT * FROM data WHERE username = ?")
        let userObject= prepareStatement.get(`${username}`)
                let warnReas = userObject["warnReason"]
                let newReas = reason
                let finalReason = warnReas + ", " + newReas
                let warnAmt = userObject["warnNum"]
                let newNum = 1
                let finalWarn = warnAmt + newNum
            if (warnReas === "N/A"){
                let prepareUpdate = sql.prepare(`UPDATE data SET warnNum = ?, warnReason = ? WHERE username = ?`)
                prepareUpdate.run(finalWarn, newReas, username);
            } else{
            let prepareUpdate = sql.prepare(`UPDATE data SET warnNum = ?, warnReason = ? WHERE username = ?`)
            prepareUpdate.run(finalWarn, finalReason, username);
            }
            message.channel.send(`${username} has been warned for this reason: ${reason}`)
}