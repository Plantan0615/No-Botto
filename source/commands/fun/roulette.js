const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
// roulette functions
var wheel ={
    0: "green", 
    1: "black", 
    2: "red"
};
    function pickColour() {
        return(wheel [Object.keys(wheel)[Math.floor(Math.random() * Object.keys(wheel).length)]])
    };
    var colour = pickColour();
    var greenNums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    var blackNums = [16, 5, 3, 18, 7, 14, 12, 9, 11, 25, 34, 21, 32, 23, 30, 29, 36, 27]
    var redNums = [33, 20, 22, 26, 35, 28, 37, 31, 24, 6, 17, 2, 15, 10, 19, 8, 13, 4]
    if (colour === "black"){
    function pickBlackNum (){
        return blackNums[Math.floor(Math.random() * blackNums.length)]};
    var num = pickBlackNum();}
    else if (colour === "red"){
    function pickRedNum (){
        return redNums[Math.floor(Math.random() * redNums.length)]};
    var num = pickRedNum();}
    else if (colour === "green"){
    function pickGreenNum (){
        return greenNums[Math.floor(Math.random() * greenNums.length)]};
    var num = pickGreenNum();}
    else {console.log("error");}
//user input
let msgArray = message.content.toLowerCase().substring(10).split (" ")
let colourGuess =(msgArray[0]);
let numGuess = parseInt(msgArray[1]);
let wager = (msgArray[2]);
//if no colour guess
if(!colourGuess){
    message.delete({ timeout: 2000 })
        message.channel.send("No Colour Provided. Please type black, red, or green after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if invalid colour
else if(colourGuess !== "black" && colourGuess !== "red" && colourGuess !== "green"){
    message.delete({ timeout: 2000 })
        message.channel.send("Invalid Colour. Please type black, red, or green after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if no number guess
else if(!numGuess){
    message.delete({ timeout: 2000 })
        message.channel.send("No Number Provided. Please type a number between 1 and 37 after the colour.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if invalid number
else if(numGuess > "37"){
    message.delete({ timeout: 2000 })
        message.channel.send("Invalid Number. Please type a number between 0 and 36 after the colour.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//
else if(!wager){
    message.delete({ timeout: 2000 })
        message.channel.send("No wager provided. Please type the amount of Moneys you would like to bet (after the Roulette Wheel Number).")
            .then(msg => msg.delete({timeout: 3000}))
            .catch(err => console.log(err));
}
//if all is well
else{
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
        if (colourGuess === colour) {
            if (numGuess === num){
                let finalMoneys = newMoneys + currentMoneys
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const winEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Win " + wager + " Moneys!")
                .setColor("#0f5718")
                message.channel.send(winEmbed)
                }
            else if(numGuess !== num){
                let finalMoneys = currentMoneys - newMoneys;
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const loseEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Lost " + wager + " Moneys!")
                .setColor("#ec2727")
                message.channel.send(loseEmbed)
                }
            }
        else if (colourGuess !== colour){
                let finalMoneys = currentMoneys - newMoneys;
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const loseEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Lost " + wager + " Moneys!")
                .setColor("#ec2727")
                message.channel.send(loseEmbed)
                }      
        }
    };