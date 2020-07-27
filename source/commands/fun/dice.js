const fs = require("fs").promises;
module.exports.run = async(client, message, args) => {
    function rollDie() {
        return (Math.floor(Math.random() *6) + 1)
}
let msgArray = message.content.toLowerCase().substring(6).split (" ")
var evenOdd = (msgArray[0]);
let wager = (msgArray[1]);
    let roll1 = rollDie()
    let roll2 = rollDie()
    var rollTotal = roll1 + roll2;
    function isEven() {
   if (rollTotal % 2 == 0)
       return ("even");
    else 
       return ("odd");
   }
    var compare = isEven();
    if(!evenOdd){
        message.delete({ timeout: 2000 })
        message.channel.send("Please type even or odd after the dice command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
        }
    else if(!wager){
            message.delete({ timeout: 2000 })
            message.channel.send("No wager provided. Please type the amount of Moneys you would like to bet (after even or odd)")
                .then(msg => msg.delete({timeout: 2000}))
                .catch(err => console.log(err));
            }
    else {
        let xpFile = await fs.readFile("userXP.json", "utf8");
        let xpObject = JSON.parse(xpFile);
        if(xpObject.hasOwnProperty(message.author.id)){
            let userXpObject = xpObject[message.author.id];
            if (userXpObject.hasOwnProperty(message.guild.id)){
            let guildXpObject = userXpObject[message.guild.id];
            let newMoneys = parseInt(wager);
            let currentMoneys = guildXpObject["userMoneys"];
    if (evenOdd === compare){
        let updatedMoneys = newMoneys + currentMoneys;
        xpObject[message.author.id][message.guild.id]["userMoneys"] = updatedMoneys;
        await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
        message.reply("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare + " You Win " + wager + " Moneys!");
    }
    else if (evenOdd !== compare){
        let updatedMoneys = currentMoneys - newMoneys;
        xpObject[message.author.id][message.guild.id]["userMoneys"] = updatedMoneys;
        await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
        message.reply("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare + " You Lost " + wager + " Moneys!");
                }
            }
        }
    }
};