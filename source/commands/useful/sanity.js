const discord = require("discord.js")
module.exports.run = async(client, message, args) => {
const rulesEmbed = new discord.MessageEmbed()
      .setTitle("I am still sane!")
      .setDescription(`I promise.`)
      .setColor("#19da58")
         message.channel.send(rulesEmbed);
}

module.exports.help = {
      name: "sanity",
      category: "useful",
      usage: "",
      description: "Type this to see if I am still online."
  }