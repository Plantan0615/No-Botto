module.exports.run = async(client, message, args) => {
   let roleNames = args.split (", ");
   let roleSet = new Set(roleNames);
    let { cache } = message.guild.roles;

   roleSet.forEach(roleName => {
       let role = cache.find(role => role.name.toLowerCase() === roleName);
       if(role) {
           if(message.member.roles.cache.has(role.id)) {
               message.member.roles.remove(role)
                .then(member => message.channel.send("You removed the role"))
                .catch(err => {
                   console.log(err)
                    message.channel.send("Something went wrong");
                   });
               return;
            }
    }
       else {
           message.channel.send("Role Not Found");
       }
   });
}