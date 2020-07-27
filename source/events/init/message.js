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
                let newXP = 2
                let currentXp = guildXpObject["userXP"];
                let updatedXP = newXP + currentXp;
                let newMoneys = 1
                let currentMoneys = guildXpObject["userMoneys"];
                let updatedMoneys = newMoneys + currentMoneys;
                let currentLevel = guildXpObject["userLevel"];
                let updatedLevel = updateLevel(updatedXP);
                //update json file 
                    xpObject[message.author.id][message.guild.id]["userXP"] = updatedXP;
                    xpObject[message.author.id][message.guild.id]["userMoneys"] = updatedMoneys;
                    xpObject[message.author.id][message.guild.id]["userLevel"] = updatedLevel;
                    await fs.writeFile("userXP.json", JSON.stringify (xpObject, null, 4), "utf8").catch(err=> console.log(err));
        //if levelled up
                if (currentLevel != updatedLevel){
                    if(currentLevel === 2){
                        message.member.roles.remove("735218837057962058");
                        message.member.roles.add("736668508129198170");
                        message.channel.send(`${message.member} Just ditched the Noobz Role. iPhone Photographers Role Get!`);
                    }
                    else if(currentLevel === 5){
                        message.member.roles.remove("736668508129198170");
                        message.member.roles.add("736676248884871231");
                        message.channel.send(`${message.member} Just ditched the iPhone Photographers Role. Soy Boys Role Get!`);
                    }
                   else if(currentLevel === 10){
                        message.member.roles.remove("736676248884871231");
                        message.member.roles.add("736676760971640892");
                        message.channel.send(`${message.member} Just ditched the Soy Boys Role. Crafty Crew Role Get!`);
                        
                    }
                    else if(currentLevel === 15){
                        message.member.roles.remove("736676760971640892");
                        message.member.roles.add("736676859596767413");
                        message.channel.send(`${message.member} Just ditched the Crafty Crew Role. Epic Gamers Role Get!`);
                    }
                    else{ message.channel.send(`${message.member} has levelled up.`)};
                }
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
}
// declare levels system
function updateLevel(updatedXP){
    if(updatedXP >= 0 && updatedXP <= 1000) return 1;//start as Noobz
    else if(updatedXP > 1000 && updatedXP <= 2000) return 2;//iphone photographers (>2000)
    else if(updatedXP > 2000 && updatedXP <= 3000) return 3;
    else if(updatedXP > 3000 && updatedXP <= 4000) return 4;
    else if(updatedXP > 4000 && updatedXP <= 5000) return 5;//Soy Boys (>5000)
    else if(updatedXP > 5000 && updatedXP <= 6000) return 6;
    else if(updatedXP > 6000 && updatedXP <= 7000) return 7;
    else if(updatedXP > 7000 && updatedXP <= 8000) return 8;
    else if(updatedXP > 8000 && updatedXP <= 9000) return 9;
    else if(updatedXP > 9000 && updatedXP <= 10000) return 10; //Crafty Crew (>10000)
    else if(updatedXP > 10000 && updatedXP <= 12000) return 11;
    else if(updatedXP > 12000 && updatedXP <= 14000) return 12;
    else if(updatedXP > 14000 && updatedXP <= 16000) return 13;
    else if(updatedXP > 16000 && updatedXP <= 18000) return 14;
    else if(updatedXP > 18000 && updatedXP <= 20000) return 15;
    else if(updatedXP > 20000) return 16; //Epic Gamers (>20000)
}