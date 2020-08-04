const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
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
    let userID = message.author.id
    let prepareStatement = sql.prepare("SELECT * FROM data WHERE userID = ?")
    let userXpObject= prepareStatement.get(`${userID}`)
        let newMoneys = parseInt(wager);
        let currentMoneys = userXpObject["userMoneys"];
        if (wager > currentMoneys){
            message.delete({ timeout: 2000 })
            message.channel.send("Your wager is higher than the Moneys you have!")
                .then(msg => msg.delete({timeout: 2000}))
                .catch(err => console.log(err));
                return;
        }
    if (evenOdd === compare){
        let finalMoneys = newMoneys + currentMoneys
        let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
        prepareUpdate.run(finalMoneys, userID);

        const winEmbed = new discord.MessageEmbed()
        .setTitle("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare)
        .setDescription("You Win " + wager + " Moneys!")
        .setColor("#0f5718")
        message.channel.send(winEmbed)
    }
    else if (evenOdd !== compare){
        let finalMoneys = currentMoneys - newMoneys;
        let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
        prepareUpdate.run(finalMoneys, userID);

        const loseEmbed = new discord.MessageEmbed()
        .setTitle("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare)
        .setDescription("You Lost " + wager + " Moneys!")
        .setColor("#ec2727")
        message.channel.send(loseEmbed)
                }
            }
        };