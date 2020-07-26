const fs = require("fs").promises;
//
// If you want to figure out how to reference the .env file the prefix declaration is where to do it
//
const PREFIX = "~";
module.exports = async(client, message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(PREFIX)){
        let cmdName = message.content.substring(message.content.indexOf(PREFIX)+ 1).split(new RegExp(/\s+/)).shift();
        let argsToParse = message.content.substring(message.content.indexOf(" ")+1);
            if(client.commands.get(cmdName)) {
                client.commands.get(cmdName).run(client, message, argsToParse);
            }
    }
    //
    //You need to set up the path so it references the userxpJSON file on your pc
    //
    const userxp = require("/Users/chase/Desktop/Coding/No Botto/source/userXP.json");
    //xp
    if(!message.content.startsWith(PREFIX)){
        //declare and check stuff
        let xpFile = await fs.readFile("userXP.json", "utf8");
        let xpObject = JSON.parse(xpFile);
        if(xpObject.hasOwnProperty(message.author.id)){
            let userXpObject = xpObject[message.author.id];
            if (userXpObject.hasOwnProperty(message.guild.id)){
            let guildXpObject = userXpObject[message.guild.id];
                let newXP = 500
                let currentXp = guildXpObject["userXP"];
                let updatedXP = newXP + currentXp;
                let newMoneys = 1
                let currentMoneys = guildXpObject["userMoneys"];
                let updatedMoneys = newMoneys + currentMoneys;
                let currentLevel = guildXpObject["userLevel"];
                let updatedLevel = updateLevel(updatedXP);
        // //if levelled up
        //         if (currentLevel != updatedLevel){
        //             if(currentLevel = 2){
        //                 message.member.roles.remove("735218837057962058")
        //                 if(updatedLevel = 3){
        //                     const role = message.guild.roles.cache.get(role => role.id === "736668508129198170");
        //                     message.member.roles.add(role);
        //             }
        //             }
        //             message.channel.send(`${message.member} has levelled up.`);
        //         }
        //update json file 
                xpObject[message.author.id][message.guild.id]["userXP"] = updatedXP;
                xpObject[message.author.id][message.guild.id]["userMoneys"] = updatedMoneys;
                xpObject[message.author.id][message.guild.id]["userLevel"] = updatedLevel;
                
                await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
            }
        //if same person in another guild sends a message for the first time
            else{
                let username = message.author.username
                xpObject[message.author.id][message.guild.id]={
                    username: username,
                    userXP: 2,
                    userLevel: 1,
                    userMoneys: 1,
                }
                await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
            }
        }
        //if person has sent their first message
        else{
        let guildId = message.guild.id
        let username = message.author.username
        xpObject[message.author.id] = {}
            xpObject[message.author.id][guildId] = {
                username: username,
                userXP: 2,
                userLevel: 1,
                userMoneys: 1
            }
            await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
        }
    }
    //
    // you can change the levels if you want
    //
    function updateLevel(exp){
        //start as Noobz
        if(exp >= 0 && exp <= 1000) return 1;
        else if(exp > 1000 && exp <= 2000) return 2;//iphone photographers (>2000)
        else if(exp > 2000 && exp <= 3000) return 3;
        else if(exp > 3000 && exp <= 4000) return 4;
        else if(exp > 4000 && exp <= 5000) return 5;//Soy Boys (>5000)
        else if(exp > 5000 && exp <= 6000) return 6;
        else if(exp > 6000 && exp <= 7000) return 7;
        else if(exp > 7000 && exp <= 8000) return 8;
        else if(exp > 8000 && exp <= 9000) return 9;
        else if(exp > 9000 && exp <= 10000) return 10; //Crafty Crew (>10000)
        else if(exp > 10000 && exp <= 12000) return 11;
        else if(exp > 12000 && exp <= 14000) return 12;
        else if(exp > 14000 && exp <= 16000) return 13;
        else if(exp > 16000 && exp <= 18000) return 14;
        else if(exp > 18000 && exp <= 20000) return 15;
        else if(exp > 20000) return 16; //Epic Gamers (>20000)
    }
}