const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
var rollType = message.content.substring(9);
if (rollType === "4"){
    function rollFour() {
        return (Math.floor(Math.random() *4) + 1)
    }
    let roll = rollFour();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "6"){
    function rollSix() {
        return (Math.floor(Math.random() *6) + 1)
    }
    let roll = rollSix();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "8"){
    function rollEight() {
        return (Math.floor(Math.random() *8) + 1)
    }
    let roll = rollEight();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "10"){
    function rollTen() {
        return (Math.floor(Math.random() *10) + 1)
    }
    let roll = rollTen();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "12"){
    function rollTwelve() {
        return (Math.floor(Math.random() *12) + 1)
    }
    let roll = rollTwelve();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "20"){
    function rollTwenty() {
        return (Math.floor(Math.random() *20) + 1)
    }
    let roll = rollTwenty();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
if (rollType === "100"){
    function rollHundred() {
        return (Math.floor(Math.random() *100) + 1)
    }
    let roll = rollHundred();
    const rollEmbed = new discord.MessageEmbed()
    .setTitle("Rolled a " + roll)
    .setColor("#271285");
    message.channel.send(rollEmbed);
}
else  if (!rollType){
    message.delete({ timeout: 2000 })
    message.channel.send("Please type 4, 6, 8, 10, 12, 20, or 100 after the dndRoll command")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
}
else if(rollType !== "4"&& rollType !== "6"&& rollType !== "8"&& rollType !== "10"&& rollType !== "12"&& rollType !== "20"&& rollType !== "100"){
    message.delete({ timeout: 2000 })
    message.channel.send("Please type 4, 6, 8, 10, 12, 20, or 100 after the dndRoll command")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
}
};