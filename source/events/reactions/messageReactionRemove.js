module.exports = async (client, reaction, user) => {
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if(reaction.message.partial) reaction.message.fetch();
    if(reaction.partial) reaction.fetch();
    //
    //the emoji IDs and channel ID must be hardcoded for this to work as it is adding roles based on what emoji was selected
    //
        if (reaction.message.channel.id === "734791204880777308") { 
        try{
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        //aww
        let msg = reaction.message.fetch();
        if (reaction.emoji.id === '734791623384236182'){
            member.roles.remove("734792750838448148");
            console.log("Role Removed");  
            }
        //binoculars
        if (reaction.emoji.id === '734791626945200159'){
            member.roles.remove("734792813828505721");
            console.log("Role Removed");  
            }
        //hebeeg
        if (reaction.emoji.id === '734791627830460456'){
            member.roles.remove("734792775580516363");
            console.log("Role Removed");  
            }
        //blue 
        if (reaction.emoji.name === '🔵'){
            member.roles.remove("734100916923400193");
            console.log("Role Removed");  
            } 
        //red 
        if (reaction.emoji.name === '🔴'){
            member.roles.remove("734100891325562902");
            console.log("Role Removed");  
            }
        // purple
        if (reaction.emoji.name === '🟣'){
            member.roles.remove("734100864569966622");
            console.log("Role Removed");  
            } 
}
        
    catch (err) {
            console.log(err);
        }
    }
//STARBOARD
const handleStarboard = async() => {
    const starboard = client.channels.cache.find(channel => channel.name.toLowerCase() === "starboard")
    const msgs = await starboard.messages.fetch({ limit: 100});
    const existingMsg = msgs.find(msg => msg.embeds.length === 1 
        ? (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
    if(existingMsg){existingMsg.edit(`${reaction.count} - ⭐`);
    if (`${reaction.count}` === "0") {existingMsg.delete();}
    }
}
if(reaction.emoji.name === "⭐") {
    await reaction.fetch();
    if(reaction.message.channel.name.toLowerCase() === "starboard") return;
    if(reaction.message.partial) {
        await reaction.message.fetch();
        handleStarboard();
    }
   else{
        handleStarboard();
    }
}
}