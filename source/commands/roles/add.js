module.exports.run = async(client, message, args) => {
    let roleNames = args.split (", ");
    let roleSet = new Set(roleNames);
    let { cache } = message.guild.roles;

    roleSet.forEach(roleName => {
        let role = cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
        if(role) {
            if(role.permissions.has("ADMINISTRATOR") || role.permissions.has("KICK_MEMBERS") || role.permissions.has("BAN_MEMBERS")){
                message.channel.send("You cannot add yourself to this role");
                return;
            }
            else if (role.id === "735218837057962058" || role.id === "736668508129198170" || role.id === "736676248884871231" || role.id === "736676760971640892" || role.id === "736676859596767413"){
                message.channel.send("You cannot add yourself to this role");
                return;
            }
            else if(message.member.roles.cache.has(role.id)) {
                message.channel.send("You already have this role");
                return;
            }
            else {
                message.member.roles.add(role)
                 .then(member => message.channel.send("You were assigned the role"))
                 .catch(err => {
                    console.log(err)
                    message.channel.send("Something went wrong");
            });
        }
    }
        else {
            message.channel.send("Role Not Found");
        }
    });
}