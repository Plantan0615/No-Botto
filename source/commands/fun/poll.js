const { MessageCollector } = require("discord.js");

let msgCollectorFilter = (newMsg, originalMsg) => {
    let { cache } = originalMsg.guild.emojis;
    if(newMsg.author.id !== originalMsg.author.id) return false;
    let emojiName = originalMsg.content
    if (emojiName = "stop poll") {
    return true;
    }
    if(!emojiName) return false;
    let emoji = cache.find(emoji => emoji.name.toLowerCase() === emojiName.toLowerCase());
    if(!emoji) {
        originalMsg.channel.send("Emoji does not exist")
            .then (msg => msg.delete({ timeout: 2000}))
            .catch (err => console.log(err));
        return false;
    }
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
                await message.channel.send("Please provide an emoji name for each poll option, one by one");
                let collector = new MessageCollector(message.channel, msgCollectorFilter.bind(null, message));
                collector.on("collect", msg =>{
                    let { cache } = msg.guild.emojis;
                    let emojiName = msg.content
                    let emoji = cache.find(emoji => emoji.name.toLowerCase() === emojiName.toLowerCase());
                    if (emoji){
                       fetchedMessage.react(emoji)
                        .then(emoji => console.log("Reacted"))
                        .then(msg.delete({ timeout: 2000 }))
                        .catch(err => console.log(err));
                    }
                    else if (emojiName.toLowerCase() == "stop poll") {
                    msg.delete({ timeout: 2000 })
                    collector.stop();
                    }
                });
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