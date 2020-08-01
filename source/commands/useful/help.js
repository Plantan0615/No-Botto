const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
// navigating help
const helpEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Navigating Help')
    .setDescription('Help With Help (haha)')
    .addFields(
        { name: "~help fun", value: "Type this command to see what fun features I have."},
        { name: "~help poll", value: "Type this to learn how to set up a poll."},
        { name: "~help random", value: "Type this to learn how to get a random meme, image, animal fact, or GIF."},
        { name: "~help roles", value: "Type this for help with adding and remove roles from yourself."},
        { name: "~help role list", value: "Type this for a list of all the roles in the server."},
        { name: "~help useful", value: "Type this to see what useful features I have. (If you need help with the password check #rules-and-info.)"},
        { name: "~help economy", value: "Type this for help understanding PXTC's economy and level systems."},
        { name: "~help admin", value: "Type this to see what features I have for admins."}
    );
//fun help
const funEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Fun Help')
    .setDescription('Help With Fun Commands')
    .addFields(
        { name: "~dice", value: "Type the dice command, then either even or odd, and how many Moneys you want to bet (Separated with a space). I will roll two dice, add them together, and tell you if you've won."},
        { name: "~dndRoll", value: "Type the roll command and then 4, 6, 8, 10, 12, 20, or 100. I will give you a random number."},
        { name: "~poll", value: "Type '~help poll' for more info"},
        { name: "~prompt", value: "Type the prompt command and then animals, body parts, buildings, expressions, or plants. I will give you a random item from the category you choose."},
        { name: "~random", value: "Type '~help random' for more info"},
        { name: "~roulette", value: "Type the roulette command and then a colour(black, red, or green), then a number (between 1-37), and how many Moneys you want to bet (Separated with spaces). I will spin the wheel and tell you if you've won."},
        { name: "~wyr", value: "Simply type the command and I will provide you with a Would You Rather scenario, and react with options A and B to allow for easy voting."},
        { name: "Starboard", value: "If there is a post that you think is funny or think should be 'immortalised', simply react to it with the ⭐ and I will add the post to the Starboard channel for you."}
    );
//poll help
const pollEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('How to Create A Poll')
    .setDescription('Help With Using ~poll')
    .addFields(
        { name: "Step 1", value: "Create the message you want me to react to. If you won't remember the names of the emojis you've included put their names somewhere in the poll itself (you can edit the poll after everything is sorted)"},
        { name: "Step 2", value: "Copy the ID of the message you just sent (You will need developer tools on for this. Go to settings, then appearance, and turn it on). Type the poll command and paste the ID."},
        { name: "Step 3", value: "You will then be prompted to provide the name of each emoji you want me to react with (one message at a time)."},
        { name: "Step 4", value: "Once you have all of the reactions you need type 'stop poll'. If you don't, I will send a message saying 'invalid emoji', if it isn't an emoji anyways. (If it happens to be the name of an emoji in the server I will add it to your poll)."},
        { name: "Step 5", value: "I will delete the messages you have sent (except for the poll itself). If you need to edit the poll, do so at this point."}
    );
//random help
const randomImageEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Get a random image, animal fact, or GIF')
    .setDescription('Help With Using ~random')
    .addFields(
        { name: "Random Meme", value: "Type meme after the random command to get a random meme."},
        { name: "Random Animal Pictures", value: "Type one of the following animals after the random command to get a random pic of that animal. Cat, dog, panda, red panda, koala, fox, birb, pikachu."},
        { name: "Random Animal Facts", value: "Type one of the following animals and the word fact after the random command to get a random fact about that animal. Cat, dog, panda, koala, fox, bird."},
        { name: "Random GIFS", value: "Type one of the following after the random command to get a random GIF of it. Hug, pat, wink."}
    );
//role help
const roleEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Managing Roles')
    .setDescription('How to Add and Remove Roles')
    .addFields(
        { name: "~add", value: "Type the add command and the names of the roles you want to add. With the roles separated by commas."},
        { name: "~del", value: "Type the del command and the names of the roles you want to remove. With the roles separated by commas."},
        { name: "Reacting for Roles", value: "You can add roles to (and remove roles from) yourself by reacting (and unreacting) to the messages in #role-menu (I will only add the role if you react in that channel)."},
        { name: "Level Roles", value: "The Noobz, iPhone Photographers, Soy Boys, Crafty Crew, and Epic Gamers Roles are level roles (based on xp, earned by takling). You CANNOT add yourself to (or remove yourself from) these roles."}
    );
//useful help
const usefulEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Useful Help')
    .setDescription('Help With Useful Commands')
    .addFields(
        { name: "~find", value: "Type this followed by the channel you want me to find. I will ping you in that channel, then delete the messages after 15 seconds."},
        { name: "~sanity", value: "Type this to see if I am still online."},
        { name: "~password", value: "For newcomers to type the password after the command. Do not tell others the password."}
    );
//role list
const roleListEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Role List')
    .setDescription('List of Roles to Help with Adding/Removing Roles via Command')
    .addFields(
        { name: "Category 1", value: "hebeeg, binoculars, aww"},
        { name: "Category 2", value: "red, blue, purple"},
        { name: "Category 3", value: "I Need to Read the Rules, Noobz, iPhone Photographers, Soy Boys, Crafty Crew, Epic Gamers"},
        { name: "Category 4", value: "Admin, No Botto, Bot"}
    );
//economy help
const economyEmbed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Economy Help')
    .setDescription('Help With Understanding PXTCs Economy and Levels Systems')
    .addFields(
        { name: "~daily", value: "Type this once a day to earn 200 Moneys"},
        { name: "~stats", value: "Type this to see your current XP, Level, and Moneys"},
        { name: "How to Earn XP/Level Up", value: "Simply by talking! You will level up once you reach a certain amount of XP. Once you have reached a certain level, you will get a new Level Role"},
        { name: "How to Earn Moneys", value: "You can earn moneys by talking, and using the daily command!"}
    );
//admin help
    const adminEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('')
    .setDescription('Help With Admin Only Commands')
    .addFields(
        { name: "~emoji", value: "For setting up role menus. Works similarly to poll, except each message in Step 3 should be formatted as 'emoji name, role name', and to stop the reactions to the role menu it's 'stop, menu'."},
        { name: "~purge", value: "For Bulk Deleting Messages. Type the command followed by the number of message you wish to delete."}
    );
//help menu navigation
var helpType = message.content.toLowerCase().substring(6);
if(!helpType){message.channel.send(helpEmbed);}
if (helpType === "fun"){message.channel.send(funEmbed);}
if (helpType === "poll"){message.channel.send(pollEmbed);}
if (helpType === "random"){message.channel.send(randomImageEmbed);}
if (helpType === "roles"){message.channel.send(roleEmbed);}
if (helpType === "role list"){message.channel.send(roleListEmbed);}
if (helpType === "economy"){message.channel.send(economyEmbed);}
if (helpType === "useful"){message.channel.send(usefulEmbed);}
if (helpType === "admin"){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot use these commands");
    message.channel.send(adminEmbed);
}
};