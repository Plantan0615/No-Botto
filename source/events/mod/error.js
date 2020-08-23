const { DiscordAPIError } = require("discord.js")

Discord = require("discord.js")
module.exports = async(err) => {
console.log(err.message)
resetBot();
    // Turn bot off (destroy), then turn it back on
    function resetBot(channel) {
        // send channel a message that you're resetting bot [optional]
        channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(process.env.BOT_TOKEN));
    }
}