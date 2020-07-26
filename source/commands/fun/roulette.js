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

    var greenNums = 0
    var blackNums = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26]
    var redNums = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3]
    
    if (colour === "black"){
    function pickBlackNum (){
        return blackNums[Math.floor(Math.random() * blackNums.length)]
    };
    var num = pickBlackNum();
    }

    else if (colour === "red"){
    function pickRedNum (){
        return redNums[Math.floor(Math.random() * redNums.length)]
    };
    var num = pickRedNum();
    }

    else if (colour === "green"){
    function pickGreenNum (){
        return greenNums
    };
    var num = pickGreenNum();
    }

    else {
        console.log("error");
    }
//user input
//let colourGuess = message.content.toLowerCase().substring(10);
let msgArray = message.content.toLowerCase().substring(10).split (" ")
let colourGuess =(msgArray[0]);
let numGuess = (msgArray[1]);
//if no colour guess
if(!colourGuess){
    message.delete({ timeout: 2000 })
        message.channel.send("No Colour Provided. Please type black, red, or green after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if invalid colour
if(colourGuess !== "black" && colourGuess !== "red" && colourGuess !== "green"){
    message.delete({ timeout: 2000 })
        message.channel.send("Invalid Colour. Please type black, red, or green after the roulette command.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if no number guess
else if(!numGuess){
    message.delete({ timeout: 2000 })
        message.channel.send("No Number Provided. Please type a number between 0 and 36 after the colour.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if invalid number
else if(numGuess > "36"){
    message.delete({ timeout: 2000 })
        message.channel.send("Invalid Number. Please type a number between 0 and 36 after the colour.")
            .then(msg => msg.delete({timeout: 2000}))
            .catch(err => console.log(err));
}
//if valid colour and number
else{
if (colourGuess === colour) {
    if (numGuess === num) {
        message.reply ("The ball landed on " + colour + " " + num + " You Win!")
    }
    if(numGuess !== num){
        message.reply ("The ball landed on " + colour + " " + num + " You Lose!")
    }
}
if (colourGuess !== colour){
    message.reply ("The ball landed on " + colour + " " + num + " You Lose!")
}
}
};