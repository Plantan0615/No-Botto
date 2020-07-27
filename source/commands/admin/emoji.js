const { MessageCollector } = require("discord.js");
let msgCollectorFilter = (newMsg, originalMsg) => {
    let { cache } = originalMsg.guild.emojis;
    if(newMsg.author.id !== originalMsg.author.id) return false;
    let [ emojiName, roleName ] = originalMsg.content.split(/,\s+/);
    if (emojiName === "stop" && roleName === "menu") {
        newMsg.delete({timeout: 2000})
        return true;
    }
    if(!emojiName && !roleName) return false;
    let emoji = cache.find(emoji => emoji.name.toLowerCase() === emojiName.toLowerCase());
    if(!emoji) {
        originalMsg.delete({ timeout: 2000 })
        originalMsg.channel.send("Emoji does not exist")
            .then (msg => msg.delete({ timeout: 2000}))
            .catch (err => console.log(err));
        return false;
    }
    let role = originalMsg.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
    if(!role) {
        originalMsg.delete({ timeout: 2000 })
        originalMsg.channel.send("Role does not exist")
            .then (msg => msg.delete({ timeout: 2000}))
            .catch (err => console.log(err));
        return false;
    }
    return true;
}
module.exports = {
run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.delete();
       let noAccess = await message.channel.send("You cannot set up role menus");
       await noAccess.delete({ timeout: 3500 }).catch(err => console.log(err));
        return;
    }
   else if (args.split(/\s+/).length !== 1) {
       message.delete();
      let msg = await message.channel.send("Too many arguments, provide only 1 message ID");
        await msg.delete({ timeout: 3500 }).catch(err => console.log(err));
   }
   else {
        try {
            let fetchedMessage = await message.channel.messages.fetch(args);
            if (fetchedMessage) {
                let sentMessage = await message.channel.send("Please provide all the emoji names with the role name, one by one, separated by commas");
                let collector = new MessageCollector(message.channel, msgCollectorFilter.bind(null, message));
                collector.on("collect", msg =>{
                    let { cache } = msg.guild.emojis;
                    let [ emojiName, roleName ] = msg.content.split(/,\s+/);
                    let emoji = cache.find(emoji => emoji.name.toLowerCase() === emojiName.toLowerCase());
                    let role = msg.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
                    if (emoji && role){
                       fetchedMessage.react(emoji)
                        .then(emoji => console.log("Reacted"))
                        .then(msg.delete({ timeout: 3500 }))
                        .catch(err => console.log(err));
                    }
                    else if (emojiName.toLowerCase() === "stop" && roleName.toLowerCase() === "menu"){
                        sentMessage.delete({ timeout: 2000});
                        msg.delete({timeout: 2000});
                        msg.channel.send("Role Menu Complete")
                        .then (msg => msg.delete({ timeout: 2000}))
                        .catch (err => console.log(err))
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
    }
}