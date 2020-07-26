module.exports = (client, reaction, user) => {
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if(reaction.message.partial) reaction.message.fetch();
    if(reaction.partial) reaction.fetch();
    if (reaction.message.channel.id === "734791204880777308") { 
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
}
catch (err) {
        console.log(err);
    }
}
}