const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
var scenarios = [
    {scenarioA: "be blind", scenarioB: "be deaf"},
    {scenarioA: "aliens be robotic", scenarioB: "aliens be organic"},
    {scenarioA: "be covered in fur", scenarioB: "be covered in scales"},
    {scenarioA: "always be 10 minutes late", scenarioB: "always be 20 minutes early"},
    {scenarioA: "have a literal get out of jail free card", scenarioB: "have a key that opens any door"},
]
function pickScenario (){
    return scenarios[Math.floor(Math.random() * scenarios.length)]
};
var situation = pickScenario();
const wyrEmbed = new discord.MessageEmbed()
.setTitle("Would you rather:")
.setDescription(situation.scenarioA + " or " + situation.scenarioB + " ?")
.setColor("BLUE")
await message.channel.send(wyrEmbed)
    .then (function(message){
        message.react("🅰️");
        message.react("🅱️");
    }).catch(err => console.log(err));
}