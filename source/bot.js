require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs").promises;
const path = require("path");
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);
client.commands = new Map();

//command handling
(async function registerCommands(dir = "commands") {
let files = await fs.readdir(path.join(__dirname, dir));
for(let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if(stat.isDirectory())
    registerCommands(path.join(dir, file));
    else {
        if(file.endsWith(".js")){
            let cmdName = file.substring(0, file.indexOf(".js"));
            try{
            let cmdModule = require(path.join(__dirname, dir, file));
            client.commands.set(cmdName, cmdModule);
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}
})();

//event hanlding
(async function registerEvents(dir = "events") {
let files = await fs.readdir(path.join(__dirname, dir));
for(let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if(stat.isDirectory())
    registerEvents(path.join(dir, file));
    else {
        if(file.endsWith(".js")){
            let eventName = file.substring(0, file.indexOf(".js"));
            try{
            let eventModule = require(path.join(__dirname, dir, file));
            client.on(eventName, eventModule.bind(null, client));
            }
            catch (err) {
                console.log(err);
            }
    }
    }
}
})();