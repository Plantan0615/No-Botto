const userxp = require("/Users/chase/Desktop/Coding/No Botto/source/userXP.json");
const fs = require("fs").promises;
const talkedRecently = new Set();
module.exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Wait until tomorrow before getting typing this again ${message.author.username}.`);
}
    else{
        let xpFile = await fs.readFile("userXP.json", "utf8");
        let xpObject = JSON.parse(xpFile);
        if(xpObject.hasOwnProperty(message.author.id)){
            let userXpObject = xpObject[message.author.id];
            if (userXpObject.hasOwnProperty(message.guild.id)){
                    let guildXpObject = userXpObject[message.guild.id];
                    let currentMoneys = guildXpObject["userMoneys"];
                    let newMoneys = 200
                    let updatedMoneys = currentMoneys + newMoneys;
                    xpObject[message.author.id][message.guild.id]["userMoneys"] = updatedMoneys;
                    await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8")
                    .then(message.channel.send("Daily Complete. Have 200 Moneys."))
                    .catch(err=> console.log(err));      
            }
        }
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id);}, 86400000);
    console.log(talkedRecently);
}}