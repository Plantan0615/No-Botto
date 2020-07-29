const { MessageCollector } = require("discord.js");
let msgCollectorFilter = (newMsg, originalMsg) => {
    let { cache } = originalMsg.guild.emojis;
    if(newMsg.author.id !== originalMsg.author.id) {return false};
    return true;
}
module.exports = {
run: async(client, message, args) => {
   if (args.split(/\s+/).length !== 1) {
      let msg = await message.channel.send("Too many arguments, provide only 1 message ID");
        await msg.delete({ timeout: 3500 }).catch(err => console.log(err));
   }
   else {
        try {
            let fetchedMessage = await message.channel.messages.fetch(args);
            if (fetchedMessage) {
            await message.channel.send("Please provide the number of poll options you wish to have.");
            let optNum = channel.awaitMessages({max: 1})
                .then(console.log(optNum))
                .catch(err => console.log(err));
                if (optNum){
                await message.channel.send("Please provide an emoji name for each poll option, one by one");
                    var i;
                    for (i = 0; i < optNum; i++){
                        let collector = new MessageCollector(message.channel, msgCollectorFilter.bind(null, message));
                        collector.on("collect", msg =>{
                            let { cache } = msg.guild.emojis;
                            let emoji = null
                            let emojiName = msg.content
                            emoji = cache.find(e => e.name.toLowerCase() === emojiName.toLowerCase());
                            if (emoji){
                            fetchedMessage.react(emoji)
                                .then(emoji => console.log("Reacted"))
                                .then(msg.delete({ timeout: 2000 }))
                                .catch(err => console.log(err));
                            }
                            if(!emoji) {
                                fetchedMessage.delete({timeout : 2000})
                                fetchedMessage.channel.send("Emoji does not exist")
                                    .then (msg => msg.delete({ timeout: 2000}))
                                    .catch (err => console.log(err));
                            }
                        });
                    }
                }
            }
        }
        catch(err) {
            console.log(err);
            let msg = await message.channel.send("Message not found");
            await msg.delete({ timeout: 3500 }).catch (err => console.log(err));
            } 
        }  
    },
}