module.exports.run = async(client, message, args) => {
    function rollDie() {
        return (Math.floor(Math.random() *6) + 1)
}
    var evenOdd = message.content.toLowerCase().substring(6);
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
    else if (evenOdd === compare)
    message.reply("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare + ". You Win!");
    else if (evenOdd !== compare)
    message.reply("Rolled a " + roll1 + " and a " + roll2 + ", for a Total of " + rollTotal + ", which is " + compare + ". You Lose!");
};