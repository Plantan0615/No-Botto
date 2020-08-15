const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
// roulette functions
//wheel
var wheel ={
    0: "green", 
    1: "black", 
    2: "red"
};
//pick colour
function pickColour() {
    return(wheel [Object.keys(wheel)[Math.floor(Math.random() * Object.keys(wheel).length)]])
};
var colour = pickColour();
//declare nums
    var greenNums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    var blackNums = [16, 5, 3, 18, 7, 14, 12, 9, 11, 25, 34, 21, 32, 23, 30, 29, 36, 27]
    var redNums = [33, 20, 22, 26, 35, 28, 37, 31, 24, 6, 17, 2, 15, 10, 19, 8, 13, 4]
        //pick black num
        if (colour === "black"){
        function pickBlackNum (){
            return blackNums[Math.floor(Math.random() * blackNums.length)]};
        var num = pickBlackNum();}
        //pick red num
        else if (colour === "red"){
        function pickRedNum (){
            return redNums[Math.floor(Math.random() * redNums.length)]};
        var num = pickRedNum();}
        //pick green num
        else if (colour === "green"){
        function pickGreenNum (){
            return greenNums[Math.floor(Math.random() * greenNums.length)]};
        var num = pickGreenNum();}
        //catch error
        else {console.log("error");}
            //check if number is even
            function isEven() {
                if (num % 2 == 0)
                    return ("even");
                 else 
                    return ("odd");
                }
                 var compare = isEven();
                 //check what group number is in
                 function numGroup(){
                    if (num <= 18)
                        return ("group1");
                    else
                        return ("group2");
                 }
                 var group = numGroup();

//user input
let msgArray = message.content.toLowerCase().substring(14).split(" ")
let guessType = msgArray[0];
let guess = msgArray[1];
let wager = msgArray [2];
//if no guess type
if(!guessType){
    message.delete({ timeout: 2000 })
        message.channel.send("No Guess Type Provided. Please type colour, even/odd, or numbers after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if invalid guess type
else if(guessType !== "color" && guessType !== "colour" && guessType !== "even/odd" && guessType !== "numbers"){
    message.delete({ timeout: 2000 })
        message.channel.send("Invalid Guess Type. Please type colour, even/odd, or numbers after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if no guess
else if(!guess){
    message.delete({ timeout: 2000 })
    message.channel.send("No Betting Option Provided. Please type red, black, even, odd, group1 (for numbers 1-18), or group2 (for numbers 19-37) after the guess type.")
        .then(msg => msg.delete({timeout: 2000}))
        .catch(err => console.log(err));
}
//if no wager
else if(!wager){
    message.delete({ timeout: 2000 })
    message.channel.send("No wager provided. Please type the amount of Moneys you would like to bet (after the Roulette Wheel Number/Betting Option).")
        .then(msg => msg.delete({timeout: 3000}))
        .catch(err => console.log(err));
}
//if guess type and guess
else if(guessType && guess){
    let isValidColour = ["black", "red"]
    let isValidEvenOdd = ["even", "odd"]
    let isValidNum = ["group1", "group2"]
        var valid;
    if(guessType === "colour" || guessType === "color"){valid = isValidColour.includes(guess)}
    else if(guessType === "even/odd"){valid = isValidEvenOdd.includes(guess)}
    else if(guessType === "numbers" || guessType === "number"){valid = isValidNum.includes(guess)};
    //if invalid guess
    if (valid === false) {
        message.delete({ timeout: 2000 })
        message.channel.send("Invalid Betting Option. Please type red, black, even, odd, group1 (for numbers 1-18), or group2 (for numbers 19-37) after the guess type.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
            return;
    }
    //if all is well
    else {
        let userID = message.author.id
        let prepareStatement = sql.prepare("SELECT * FROM data WHERE userID = ?")
        let userXpObject= prepareStatement.get(`${userID}`)
            let newMoneys = parseInt(wager);
            let currentMoneys = userXpObject["userMoneys"];
            //if wager > moneys
            if (wager > currentMoneys){
                message.delete({ timeout: 2000 })
                message.channel.send("Your wager is higher than the Moneys you have!")
                    .then(msg => msg.delete({timeout: 2000}))
                    .catch(err => console.log(err));
                    return;
            }
        //if colour guess
        if (guessType === "colour" || guessType === "color"){
            //win case
            if (guess === colour){
                let finalMoneys = newMoneys + currentMoneys
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const winEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Win " + wager + " Moneys!")
                .setColor("#0f5718")
                message.channel.send(winEmbed)
            }
            //lose case
            else {
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
        //if even odd guess
        if(guessType === "even/odd"){
            //win case
            if (guess === compare){
                let finalMoneys = newMoneys + currentMoneys
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const winEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Win " + wager + " Moneys!")
                .setColor("#0f5718")
                message.channel.send(winEmbed)
            }
            //lose case
            else{
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
        //if number guess
        if(guessType === "number" || guessType === "numbers"){
            //win case
            if (guess === group){
                let finalMoneys = newMoneys + currentMoneys
                let prepareUpdate = sql.prepare(`UPDATE data SET userMoneys = ? WHERE userID = ?`)
                prepareUpdate.run(finalMoneys, userID);

                const winEmbed = new discord.MessageEmbed()
                .setTitle("The ball landed on " + colour + " " + num )
                .setDescription("You Win " + wager + " Moneys!")
                .setColor("#0f5718")
                message.channel.send(winEmbed)
            }
            //lose case
            else{
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
    }  
}
 
}

module.exports.help = {
    name: "roulette5050",
    category: "fun",
    usage: "",
    description: "To bet on groups of the roulette wheel. Type the command, then a guess type (colours, even/odd, numbers), your betting option(black, red; even, odd; group1 (for numbers 1-18), group2 (for numbers 19-37)), and how many Moneys you want to bet (Separated with spaces). I will spin the wheel and tell you if you've won."
}