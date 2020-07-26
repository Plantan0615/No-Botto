module.exports.run = async(client, message, args) => {
    let xpFile = await fs.readFile("userXP.json", "utf8");
    let xpObject = JSON.parse(xpFile);
    if(xpObject.hasOwnProperty(message.author.id)){
        let userXpObject = xpObject[message.author.id];
        if (userXpObject.hasOwnProperty(message.guild.id)){
            let guildXpObject = userXpObject[message.guild.id];
                let username = guildXpObject["username"];
                let currentXp = guildXpObject["userXP"];
                let currentMoneys = guildXpObject["userMoneys"];
                let currentLevel = guildXpObject["userLevel"];
                const statsEmbed = new MessageEmbed()
                .setColor('RED')
                .setTitle('Stats')
                .setDescription(`User Stats for ${message.author.username}`)
                .addFields(
                    { name: "Username", value: username},
                    { name: "XP", value: currentXp},
                    { name: "Level", value: currentLevel},
                    { name: "Moneys", value: currentMoneys}
                );
            message.channel.send(statsEmbed);
            }
    }
}

