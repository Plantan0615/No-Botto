module.exports.run = async(client, message, args) => {
   let roleNames = args.split (", ");
   let roleSet = new Set(roleNames);
    let { cache } = message.guild.roles;

   roleSet.forEach(roleName => {
       let role = cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
       if(role) {
        if(role.permissions.has("ADMINISTRATOR") || role.permissions.has("KICK_MEMBERS") || role.permissions.has("BAN_MEMBERS")){
            message.channel.send("You cannot remove yourself from this role.").then(msg => msg.delete({timeout: 5000})).catch(err => console.log(err)) 
            return;
        }
        // else if (role.id === "734036267871895554" || role.id === "651166068877819916" || role.id === "651168912959864870" || role.id === "651098747186446346" || role.id === "651167306398826509" || role.id === "651167213490798619" || role.id === "681596021859680270" || role.id === "685464830907645953"){
        //     message.channel.send("You cannot remove yourself from this role.").then(msg => msg.delete({timeout: 5000})).catch(err => console.log(err)) 
        //     return;
        // }
        else if (role.id === "735156866035875880" ||role.id === "735218837057962058" || role.id === "736668508129198170" || role.id === "736676248884871231" || role.id === "736676760971640892" || role.id === "736676859596767413"){
            message.channel.send("You cannot remove yourself from this role.").then(msg => msg.delete({timeout: 5000})).catch(err => console.log(err)) 
            return;
        }
        else if(!message.member.roles.cache.has(role.id)) {
            message.channel.send("You don't have this role.").then(msg => msg.delete({timeout: 5000})).catch(err => console.log(err)) 
            return;
        }
        else if(message.member.roles.cache.has(role.id)) {
               message.member.roles.remove(role)
                .then(member => message.channel.send("You removed the role."))
                .catch(err => {
                    console.log(err)
                    message.channel.send("Something went wrong.");
                });
            }
        }
       else {
            message.channel.send("Role Not Found.").then(msg => msg.delete({timeout: 5000})).catch(err => console.log(err));
       }
   });
   message.delete();
}