const discord = require("discord.js")
module.exports.run = async(client, message, args) => {
const rulesEmbed = new discord.MessageEmbed()
      .setTitle("I am still sane!")
      .setDescription(`I promise.`)
      .setColor("GREEN")
         message.channel.send(rulesEmbed);
}