module.exports.run = async(client, message, args) => {
var BlackjackGame = require('./blackjack-game'),
    game = new BlackjackGame(),
    input = process.openStdin();

    input.setEncoding('utf8');

    game.on('input', function(callback){
        input.once('data', function(command){
            callback(command.substring(0, command.length -1));
        });
    });
    game.on('end', function(){
        input.destroy();
    });
    game.begin();
var shuffle = require("shuffle");
const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
const discord = require("discord.js");
//FIRST EMBED
const bjEmbed1 = new discord.MessageEmbed()
.setTitle("Blackjack")
.setDescription(`You bet ${wager} Moneys.`)
.setColor("#3b863f")
.addFields(
    {name: "Your cards:", value: ""},
    {name: "Your current total:", value: ""},
    {name: "Dealer's hand:", value: ""},
    {name: "Do you want another card?", value: "✅ for Yes, ❎ for No."}
)
//filter
const filter = (reaction, user) => { if (user.bot) return; return ["✅", '❎'].includes(reaction.emoji.name) && user.id === message.author.id;}
//USER INPUT
const wager = message.content.substring(11);
let msg1= await message.channel.send(bjEmbed1);
await msg1.react("✅")
await msg1.react('❎')
const firstMsg = await msg1.awaitReactions(filter, { max: 1 })
const reaction = firstMsg.first();
}

module.exports.help = {
    name: "blackjack",
    category: "blackjack",
    usage: "",
    description: ""
}