const {MessageEmbed} = require("discord.js");
module.exports = async (client, reaction, user) => {
    //
    // the emoji IDs and channel ID must be hardcoded for this to work as it is adding roles based on what emoji was selected
    // reaction roles
    if (reaction.message.channel.id === "734791204880777308") {
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if(reaction.message.partial) reaction.message.fetch();
        if(reaction.partial) reaction.fetch(); 
    try{
    let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    //aww
    let msg = reaction.message.fetch();
    if (reaction.emoji.id === '734791623384236182'){
        member.roles.add("734792750838448148");
        console.log("Role Added");  
    }
    //binoculars
    if (reaction.emoji.id === '734791626945200159'){
        member.roles.add("734792813828505721");
        console.log("Role Added");  
    }
    //hebeeg
    if (reaction.emoji.id === '734791627830460456'){
        member.roles.add("734792775580516363");
        console.log("Role Added");  
    }
    //blue 
    if (reaction.emoji.name === '🔵'){
        member.roles.add("734100916923400193");
        console.log("Role Added");  
        } 
    //red 
    if (reaction.emoji.name === '🔴'){
        member.roles.add("734100891325562902");
        console.log("Role Added");  
        }
    // purple
    if (reaction.emoji.name === '🟣'){
        member.roles.add("734100864569966622");
        console.log("Role Added");  
        } 
    }
    catch (err) {console.log(err);}
        }
//STARBOARD 
const handleStarboard = async () => {
    const starboard = client.channels.cache.find(channel => channel.name.toLowerCase() === "starboard")
    const msgs = await starboard.messages.fetch({ limit: 100});
    const existingMsg = msgs.find(msg => msg.embeds.length === 1 
        ? (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
    if(existingMsg){existingMsg.edit(`${reaction.count} - ⭐`);}
    else{
    const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
        .addField("Message:", reaction.message.content)
        .setDescription(`[React to me here](${reaction.message.url})`)
        .setFooter(reaction.message.id + " - " + new Date(reaction.message.createdTimestamp) + " - Message ID and Post Date");
        if (starboard){starboard.send(" 1- ⭐", embed);}
    }
}
if(reaction.emoji.name === "⭐") {
    await reaction.fetch();
    if(reaction.message.channel.name.toLowerCase() === "starboard") return;
    if(reaction.message.partial) {
        handleStarboard();
    }
    else{
        handleStarboard();
    }
    } 
}