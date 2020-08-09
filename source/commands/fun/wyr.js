const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
    let prepStatement = sql.prepare(`SELECT * FROM wyr`)
    let scenarios = prepStatement.all();
function pickScenario (){
    return scenarios[Math.floor(Math.random() * scenarios.length)]
};
var situation = pickScenario();
const wyrEmbed = new discord.MessageEmbed()
.setTitle("Would you rather:")
.setDescription(situation.scenarios)
.setColor("#ca17a2")
await message.channel.send(wyrEmbed)
    .then (function(message){
        message.react("🅰️");
        message.react("🅱️");
    }).catch(err => console.log(err));
}